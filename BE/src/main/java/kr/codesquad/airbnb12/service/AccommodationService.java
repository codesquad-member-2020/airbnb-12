package kr.codesquad.airbnb12.service;

import kr.codesquad.airbnb12.dao.AccommodationDaoImpl;
import kr.codesquad.airbnb12.domain.Image;
import kr.codesquad.airbnb12.dto.AccommodationSummary;
import kr.codesquad.airbnb12.dto.FilteredAccommodationsResponseDto;
import kr.codesquad.airbnb12.dto.TrimmedParameters;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.stream.Collectors;

import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToBooking.NOBODY;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToBooking.TODAY;
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
        return Optional.ofNullable(parameterName)
                .filter(this::isInstanceOfDouble)
                .map(priceParameter -> ensureValidPrice(priceParameter, defaultValue))
                .orElseGet(() -> defaultValue);
    }

    private LocalDate parseDateParameter(String parameterName, LocalDate defaultValue) {
        return Optional.ofNullable(parameterName)
                .filter(this::isInstanceOfLocalDate)
                .map(dateParameter -> ensureValidLocalDate(dateParameter, defaultValue))
                .orElseGet(() -> defaultValue);
    }

    private Integer parseHeadcountParameter(String parameterName, Integer defaultValue) {
        return Optional.ofNullable(parameterName)
                .filter(this::isInstanceOfInteger)
                .map(headCountParameter -> ensureValidHeadCount(headCountParameter, defaultValue))
                .orElseGet(() -> defaultValue);
    }

    private boolean isInstanceOfDouble(String priceParameter) {
        try {
            Double.parseDouble(priceParameter);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private boolean isInstanceOfInteger(String headCountParameter) {
        try {
            Integer.parseInt(headCountParameter);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private boolean isInstanceOfLocalDate(String dateParameter) {
        try {
            LocalDate.parse(dateParameter);
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    private Double ensureValidPrice(String priceParameter, Double defaultValue) {
        if (Double.parseDouble(priceParameter) < 0) {
            return defaultValue;
        }
        return Double.parseDouble(priceParameter);
    }

    private Integer ensureValidHeadCount(String priceParameter, Integer defaultValue) {
        if (Integer.parseInt(priceParameter) < 0) {
            return defaultValue;
        }
        return Integer.parseInt(priceParameter);
    }

    private LocalDate ensureValidLocalDate(String dateParameter, LocalDate defaultValue) {
        if (TODAY.compareTo(LocalDate.parse(dateParameter)) < 0) {
            return defaultValue;
        }
        return LocalDate.parse(dateParameter);
    }
}
