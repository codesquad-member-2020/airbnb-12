package kr.codesquad.airbnb12.util;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToBooking.NOBODY;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToBooking.TODAY;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToParameterNames.*;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToParameterNames.CHECK_OUT_PARAMETER;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToPrice.MAXIMUM_DOLLAR;
import static kr.codesquad.airbnb12.commonconstant.ConstantsRelatedToPrice.ZERO_DOLLAR;

public class ParsingParameterUtils {
    public static Map<String, LocalDate> parseDateParameters(String checkInDate, String checkOutDate) {
        boolean invalidCheckInDate = parseDateParameters(checkInDate);
        boolean inValidCheckOutDate = parseDateParameters(checkOutDate);
        if (invalidCheckInDate || inValidCheckOutDate) {
            return defineValueOfRelatedParameters(CHECK_IN_PARAMETER, TODAY, CHECK_OUT_PARAMETER, TODAY.plusYears(1));
        }
        LocalDate checkIn = LocalDate.parse(checkInDate);
        LocalDate checkOut = LocalDate.parse(checkOutDate);
        if (checkOut.compareTo(checkIn) < 0 || checkIn.compareTo(TODAY) < 0 || checkOut.compareTo(TODAY) < 0) {
            return defineValueOfRelatedParameters(CHECK_IN_PARAMETER, TODAY, CHECK_OUT_PARAMETER, TODAY.plusYears(1));
        }
        return defineValueOfRelatedParameters(CHECK_IN_PARAMETER, checkIn, CHECK_OUT_PARAMETER, checkOut);
    }

    public static Map<String, Double> parsePriceParameters(String minimumPriceParameter, String maximumPriceParameter) {
        Double minimumPrice = parsePriceParameter(minimumPriceParameter, ZERO_DOLLAR);
        Double maximumPrice = parsePriceParameter(maximumPriceParameter, MAXIMUM_DOLLAR);
        if (isInvalidPrices(minimumPrice, maximumPrice)) {
            minimumPrice = ZERO_DOLLAR;
            maximumPrice = MAXIMUM_DOLLAR;
        }
        return defineValueOfRelatedParameters(MINIMUM_PRICE_PARAMETER, minimumPrice, MAXIMUM_PRICE_PARAMETER, maximumPrice);
    }

    public static boolean isInvalidPrices(Double minimumPrice, Double maximumPrice) {
        return minimumPrice > maximumPrice;
    }

    public static Double parsePriceParameter(String parameterName, Double defaultValue) {
        return Optional.ofNullable(parameterName)
                .filter(ParsingParameterUtils::isInstanceOfDouble)
                .map(priceParameter -> ensureValidPrice(priceParameter, defaultValue))
                .orElseGet(() -> defaultValue);
    }

    public static Boolean parseDateParameters(String parameterName) {
        return Optional.ofNullable(parameterName)
                .filter(ParsingParameterUtils::isInstanceOfLocalDate)
                .map(String::isEmpty)
                .orElseGet(() -> Boolean.TRUE);
    }

    public static Integer parseHeadcountParameter(String parameterName) {
        return Optional.ofNullable(parameterName)
                .filter(ParsingParameterUtils::isInstanceOfInteger)
                .map(headCountParameter -> ensureValidHeadCount(headCountParameter, NOBODY))
                .orElseGet(() -> NOBODY);
    }

    public static boolean isInstanceOfDouble(String priceParameter) {
        try {
            Double.parseDouble(priceParameter);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static boolean isInstanceOfInteger(String headCountParameter) {
        try {
            Integer.parseInt(headCountParameter);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static boolean isInstanceOfLocalDate(String dateParameter) {
        try {
            LocalDate.parse(dateParameter);
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    public static Double ensureValidPrice(String priceParameter, Double defaultValue) {
        if (Double.parseDouble(priceParameter) < 0) {
            return defaultValue;
        }
        return Double.parseDouble(priceParameter);
    }

    public static Integer ensureValidHeadCount(String priceParameter, Integer defaultValue) {
        if (Integer.parseInt(priceParameter) < 0) {
            return defaultValue;
        }
        return Integer.parseInt(priceParameter);
    }

    public static <T> HashMap<String, T> defineValueOfRelatedParameters(String nameOfTheParameter, T valueOfTheParameter,
                                                                  String nameOfTheOtherParameter, T valueOfTheOtherParameter) {
        return new HashMap<String, T>() {
            {
                put(nameOfTheParameter, valueOfTheParameter);
                put(nameOfTheOtherParameter, valueOfTheOtherParameter);
            }
        };
    }
}
