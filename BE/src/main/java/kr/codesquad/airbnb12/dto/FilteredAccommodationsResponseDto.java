package kr.codesquad.airbnb12.dto;

import java.util.List;

public class FilteredAccommodationsResponseDto {

    private int totalCount;

    private List<Integer> priceDistribution;

    private List<AccommodationSummary> accommodations;

    private FilteredAccommodationsResponseDto(int totalCount,
                                             List<Integer> priceDistribution,
                                             List<AccommodationSummary> accommodations) {
        this.totalCount = totalCount;
        this.priceDistribution = priceDistribution;
        this.accommodations = accommodations;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public List<Integer> getPriceDistribution() {
        return priceDistribution;
    }

    public void setPriceDistribution(List<Integer> priceDistribution) {
        this.priceDistribution = priceDistribution;
    }

    public List<AccommodationSummary> getAccommodations() {
        return accommodations;
    }

    public void setAccommodations(List<AccommodationSummary> accommodations) {
        this.accommodations = accommodations;
    }

    public static FilteredAccommodationsResponseDto create(int totalCount, List<Integer> priceDistribution, List<AccommodationSummary> accommodations) {
        return new FilteredAccommodationsResponseDto(totalCount, priceDistribution, accommodations);
    }
}
