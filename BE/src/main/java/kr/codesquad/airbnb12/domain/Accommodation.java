package kr.codesquad.airbnb12.domain;

import java.util.List;

public class Accommodation {

    private Long id;

    private String name;

    private String description;

    private int maximumAccommodates;

    private int minimumNights;

    private int maximumNights;

    private double originalPrice;

    private double salePrice;

    private double cleaningFee;

    private boolean superHost;

    private double grade;

    private Location location;

    private List<String> thumbnailImages;

    public Accommodation(Long id, String name, String description, int maximumAccommodates, int minimumNights,
                         int maximumNights, double originalPrice, double salePrice, double cleaningFee,
                         boolean superHost, double grade, Location location, List<String> thumbnailImages) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.maximumAccommodates = maximumAccommodates;
        this.minimumNights = minimumNights;
        this.maximumNights = maximumNights;
        this.originalPrice = originalPrice;
        this.salePrice = salePrice;
        this.cleaningFee = cleaningFee;
        this.superHost = superHost;
        this.grade = grade;
        this.location = location;
        this.thumbnailImages = thumbnailImages;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getMaximumAccommodates() {
        return maximumAccommodates;
    }

    public void setMaximumAccommodates(int maximumAccommodates) {
        this.maximumAccommodates = maximumAccommodates;
    }

    public int getMinimumNights() {
        return minimumNights;
    }

    public void setMinimumNights(int minimumNights) {
        this.minimumNights = minimumNights;
    }

    public int getMaximumNights() {
        return maximumNights;
    }

    public void setMaximumNights(int maximumNights) {
        this.maximumNights = maximumNights;
    }

    public double getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(double originalPrice) {
        this.originalPrice = originalPrice;
    }

    public double getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    public double getCleaningFee() {
        return cleaningFee;
    }

    public void setCleaningFee(double cleaningFee) {
        this.cleaningFee = cleaningFee;
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

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public List<String> getThumbnailImages() {
        return thumbnailImages;
    }

    public void setThumbnailImages(List<String> thumbnailImages) {
        this.thumbnailImages = thumbnailImages;
    }

    public static class Builder {
        Long id;
        String name;
        String description;
        int maximumAccommodates;
        int minimumNights;
        int maximumNights;
        double originalPrice;
        double salePrice;
        double cleaningFee;
        boolean superHost;
        double grade;
        Location location;
        List<String> thumbnailImages;

        public Builder() {}

        public Builder(Accommodation accommodation) {
            this.id = accommodation.id;
            this.name = accommodation.name;
            this.description = accommodation.description;
            this.maximumAccommodates = accommodation.maximumAccommodates;
            this.minimumNights = accommodation.minimumNights;
            this.maximumNights = accommodation.maximumNights;
            this.originalPrice = accommodation.originalPrice;
            this.salePrice = accommodation.salePrice;
            this.cleaningFee = accommodation.cleaningFee;
            this.superHost = accommodation.superHost;
            this.grade = accommodation.grade;
            this.location = accommodation.location;
            this.thumbnailImages = accommodation.thumbnailImages;
        }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder description(String description) {
            this.description = description;
            return this;
        }

        public Builder maximumAccommodates(int maximumAccommodates) {
            this.maximumAccommodates = maximumAccommodates;
            return this;
        }

        public Builder minimumNights(int minimumNights) {
            this.minimumNights = minimumNights;
            return this;
        }

        public Builder maximumNights(int maximumNights) {
            this.maximumNights = maximumNights;
            return this;
        }

        public Builder originalPrice(double originalPrice) {
            this.originalPrice = originalPrice;
            return this;
        }

        public Builder salePrice(double salePrice) {
            this.salePrice = salePrice;
            return this;
        }

        public Builder cleaningFee(double cleaningFee) {
            this.cleaningFee = cleaningFee;
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

        public Builder location(Location location) {
            this.location = location;
            return this;
        }

        public Builder thumbnailImages(List<String> thumbnailImages) {
            this.thumbnailImages = thumbnailImages;
            return this;
        }

        public Accommodation build() {
            return new Accommodation(id, name, description, maximumAccommodates, minimumNights,
                                     maximumNights, originalPrice, salePrice, cleaningFee,
                                     superHost, grade, location, thumbnailImages);
        }
    }
}
