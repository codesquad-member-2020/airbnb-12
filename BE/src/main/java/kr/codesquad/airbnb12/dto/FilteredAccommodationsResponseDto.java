package kr.codesquad.airbnb12.dto;

import kr.codesquad.airbnb12.domain.Accommodation;

import java.util.List;

public class FilteredAccommodationsResponseDto {

    private int totalCount;

    private List<Integer> priceDistribution;

    private List<Accommodation> accommodations;

}
