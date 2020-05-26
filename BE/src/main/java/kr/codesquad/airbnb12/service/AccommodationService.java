package kr.codesquad.airbnb12.service;

import kr.codesquad.airbnb12.dao.AccommodationDaoImpl;
import kr.codesquad.airbnb12.domain.Image;
import kr.codesquad.airbnb12.dto.AccommodationSummary;
import kr.codesquad.airbnb12.dto.FilteredAccommodationsResponseDto;
import kr.codesquad.airbnb12.dto.TrimmedParameters;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToPrice.*;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToParameterNames.*;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToBooking.*;

@Service
public class AccommodationService {

    private final AccommodationDaoImpl accommodationDaoImpl;

    public AccommodationService(AccommodationDaoImpl accommodationDaoImpl) {
        this.accommodationDaoImpl = accommodationDaoImpl;
    }

    public FilteredAccommodationsResponseDto getFilteredAccommodations(Map<String, String> requestParameters) {
        TrimmedParameters trimmedParameters = trimRequestParameters(requestParameters);
        List<AccommodationSummary> accommodationSummaries = accommodationDaoImpl.findAllAccommodationSummaries();
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
        LocalDate checkIn = parseDateParameter(requestParameters.get(CHECK_IN_PARAMETER), TODAY);
        LocalDate checkOut = parseDateParameter(requestParameters.get(CHECK_OUT_PARAMETER), TODAY);
        Integer adults = parseHeadcountParameter(requestParameters.get(ADULT_PARAMETER), NOBODY);
        Integer children = parseHeadcountParameter(requestParameters.get(CHILDREN_PARAMETER), NOBODY);
        Integer infants = parseHeadcountParameter(requestParameters.get(INFANT_PARAMETER), NOBODY);
        Double minimumPrice = parsePriceParameter(requestParameters.get(MINIMUM_PRICE_PARAMETER), ZERO_DOLLAR);
        Double maximumPrice = parsePriceParameter(requestParameters.get(MAXIMUM_PRICE_PARAMETER), MAXIMUM_DOLLAR);
        return new TrimmedParameters.Builder()
                                    .checkIn(checkIn)
                                    .checkOut(checkOut)
                                    .adults(adults)
                                    .children(children)
                                    .infants(infants)
                                    .minimumPrice(minimumPrice)
                                    .maximumPrice(maximumPrice)
                                    .build();
    }

    private Double parsePriceParameter(String parameterName, Double defaultValue) {
        return Double.valueOf(Optional.ofNullable(parameterName).orElseGet(() -> String.valueOf(defaultValue)));
    }

    private LocalDate parseDateParameter(String parameterName, LocalDate defaultValue) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        return LocalDate.parse(Optional.ofNullable(parameterName).orElseGet(() -> String.valueOf(defaultValue)), formatter);
    }

    private Integer parseHeadcountParameter(String parameterName, Integer defaultValue) {
        return Integer.valueOf(Optional.ofNullable(parameterName).orElseGet(() -> String.valueOf(defaultValue)));
    }
}
