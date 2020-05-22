package kr.codesquad.airbnb12.dto;

import java.util.List;

public class AccommodationSummary {

    private Long accommodationId;

    private List<String> thumbnailImages;

    private boolean superHost;

    private double grade;

    private String title;

    private int maximumAccommodates;

    private double originalPrice;

    private double finalPrice;

    private String location;

    public AccommodationSummary() {
    }

    public AccommodationSummary(Long accommodationId, List<String> thumbnailImages, boolean superHost,
                                double grade, String title, int maximumAccommodates,
                                double originalPrice, double finalPrice, String location) {
        this.accommodationId = accommodationId;
        this.thumbnailImages = thumbnailImages;
        this.superHost = superHost;
        this.grade = grade;
        this.title = title;
        this.maximumAccommodates = maximumAccommodates;
        this.originalPrice = originalPrice;
        this.finalPrice = finalPrice;
        this.location = location;
    }

    public Long getAccommodationId() {
        return accommodationId;
    }

    public void setAccommodationId(Long accommodationId) {
        this.accommodationId = accommodationId;
    }

    public List<String> getThumbnailImages() {
        return thumbnailImages;
    }

    public void setThumbnailImages(List<String> thumbnailImages) {
        this.thumbnailImages = thumbnailImages;
    }

    public boolean isSuperHost() {
        return superHost;
    }

    public void setSuperHost(boolean superHost) {
        this.superHost = superHost;
    }

    public double getGrade() {
        return grade;
    }

    public void setGrade(double grade) {
        this.grade = grade;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getMaximumAccommodates() {
        return maximumAccommodates;
    }

    public void setMaximumAccommodates(int maximumAccommodates) {
        this.maximumAccommodates = maximumAccommodates;
    }

    public double getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(double originalPrice) {
        this.originalPrice = originalPrice;
    }

    public double getFinalPrice() {
        return finalPrice;
    }

    public void setFinalPrice(double finalPrice) {
        this.finalPrice = finalPrice;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public static class Builder {
        Long accommodationId;
        List<String> thumbnailImages;
        boolean superHost;
        double grade;
        String title;
        int maximumAccommodates;
        double originalPrice;
        double finalPrice;
        String location;

        public Builder() { }

        public Builder(AccommodationSummary accommodationSummary) {
            this.accommodationId = accommodationSummary.accommodationId;
            this.thumbnailImages = accommodationSummary.thumbnailImages;
            this.superHost = accommodationSummary.superHost;
            this.grade = accommodationSummary.grade;
            this.title = accommodationSummary.title;
            this.maximumAccommodates = accommodationSummary.maximumAccommodates;
            this.originalPrice = accommodationSummary.originalPrice;
            this.finalPrice = accommodationSummary.finalPrice;
            this.location = accommodationSummary.location;
        }

        public Builder accommodationId(Long accommodationId) {
            this.accommodationId = accommodationId;
            return this;
        }

        public Builder thumbnailImages(List<String> thumbnailImages) {
            this.thumbnailImages = thumbnailImages;
            return this;
        }

        public Builder superHost(boolean superHost) {
            this.superHost = superHost;
            return this;
        }

        public Builder grade(double grade) {
            this.grade = grade;
            return this;
        }

        public Builder title(String title) {
            this.title = title;
            return this;
        }

        public Builder maximumAccommodates(int maximumAccommodates) {
            this.maximumAccommodates = maximumAccommodates;
            return this;
        }

        public Builder originalPrice(double originalPrice) {
            this.originalPrice = originalPrice;
            return this;
        }

        public Builder finalPrice(double finalPrice) {
            this.finalPrice = finalPrice;
            return this;
        }

        public Builder location(String location) {
            this.location = location;
            return this;
        }

        public AccommodationSummary build() {
            return new AccommodationSummary(accommodationId, thumbnailImages, superHost,
                                            grade, title, maximumAccommodates,
                                            originalPrice, finalPrice, location);
        }
    }
}
