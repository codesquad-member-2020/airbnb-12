package kr.codesquad.airbnb12.service;

import kr.codesquad.airbnb12.dao.AccommodationDaoImpl;
import kr.codesquad.airbnb12.domain.Accommodation;
import kr.codesquad.airbnb12.domain.Image;
import kr.codesquad.airbnb12.dto.AccommodationSummary;
import kr.codesquad.airbnb12.dto.BookingDetailsResponseDto;
import kr.codesquad.airbnb12.dto.FilteredAccommodationsResponseDto;
import kr.codesquad.airbnb12.dto.TrimmedParameters;
import kr.codesquad.airbnb12.util.ParsingParameterUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToParameterNames.*;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToPrice.*;

@Service
public class AccommodationService {

    private final AccommodationDaoImpl accommodationDaoImpl;

    public AccommodationService(AccommodationDaoImpl accommodationDaoImpl) {
        this.accommodationDaoImpl = accommodationDaoImpl;
    }

    public FilteredAccommodationsResponseDto getFilteredAccommodations(Map<String, String> requestParameters) {
        TrimmedParameters trimmedParameters = trimRequestParameters(requestParameters);
        List<AccommodationSummary> accommodationSummaries = accommodationDaoImpl.findAllAccommodationSummaries(trimmedParameters);
        List<Long> accommodationIds = accommodationSummaries.stream()
                                                            .map(AccommodationSummary::getAccommodationId)
                                                            .collect(Collectors.toList());
        List<Image> relatedImages = accommodationDaoImpl.findImagesByAccommodationIds(accommodationIds);
        List<Integer> priceDistribution = new ArrayList<>(Collections.nCopies(PRICE_DISTRIBUTION_SIZE, 0));
        accommodationSummaries.forEach(accommodationSummary -> {
            int indexOfPriceDistribution = (int) ((accommodationSummary.getFinalPrice() / PRICE_RANGE_DIFFERENCE) - 1);
            int countOfThePrices = priceDistribution.get(indexOfPriceDistribution);
            priceDistribution.set(indexOfPriceDistribution, countOfThePrices + 1);
            List<String> images = relatedImages.stream()
                                               .filter(image -> accommodationSummary.getAccommodationId().equals(image.getAccommodation()))
                                               .map(Image::getUrl)
                                               .collect(Collectors.toList());
            accommodationSummary.setThumbnailImages(images);
        });
        return FilteredAccommodationsResponseDto.create(accommodationSummaries.size(), priceDistribution, accommodationSummaries);
    }

    private TrimmedParameters trimRequestParameters(Map<String, String> requestParameters) {
        Map<String, LocalDate> dateParameters = ParsingParameterUtils.parseDateParameters(requestParameters.get(CHECK_IN_PARAMETER),
                                                                                          requestParameters.get(CHECK_OUT_PARAMETER));
        Map<String, Double> priceParameters = ParsingParameterUtils.parsePriceParameters(requestParameters.get(MINIMUM_PRICE_PARAMETER),
                                                                                         requestParameters.get(MAXIMUM_PRICE_PARAMETER));
        Integer adults = ParsingParameterUtils.parseHeadcountParameter(requestParameters.get(ADULT_PARAMETER));
        Integer children = ParsingParameterUtils.parseHeadcountParameter(requestParameters.get(CHILDREN_PARAMETER));
        Integer infants = ParsingParameterUtils.parseHeadcountParameter(requestParameters.get(INFANT_PARAMETER));
        return new TrimmedParameters.Builder()
                                    .checkIn(dateParameters.get(CHECK_IN_PARAMETER))
                                    .checkOut(dateParameters.get(CHECK_OUT_PARAMETER))
                                    .adults(adults)
                                    .children(children)
                                    .infants(infants)
                                    .minimumPrice(priceParameters.get(MINIMUM_PRICE_PARAMETER))
                                    .maximumPrice(priceParameters.get(MAXIMUM_PRICE_PARAMETER))
                                    .build();
    }

    public BookingDetailsResponseDto getBookingDetails(Long accommodationId) {
        Accommodation accommodation = accommodationDaoImpl.findAccommodationById(accommodationId);
        return new BookingDetailsResponseDto.Builder()
                                            .accommodationId(accommodation.getId())
                                            .originalPrice(accommodation.getOriginalPrice())
                                            .finalPrice(accommodation.getSalePrice())
                                            .cleaningFee(accommodation.getCleaningFee())
                                            .serviceFee(accommodation.getSalePrice() * SERVICE_FEE_RATE)
                                            .tourismTax(accommodation.getSalePrice() * TOURISM_TAX_RATE)
                                            .build();
    }
}
