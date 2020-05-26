package kr.codesquad.airbnb12.dto;

import lombok.ToString;

import java.time.LocalDate;

public class TrimmedParameters {

    private LocalDate checkIn;

    private LocalDate checkOut;

    private Integer adults;

    private Integer children;

    private Integer infants;

    private Double minimumPrice;

    private Double maximumPrice;

    public TrimmedParameters() { }

    public TrimmedParameters(LocalDate checkIn, LocalDate checkOut, Integer adults, Integer children, Integer infants, Double minimumPrice, Double maximumPrice) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.minimumPrice = minimumPrice;
        this.maximumPrice = maximumPrice;
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public Integer getAdults() {
        return adults;
    }

    public void setAdults(Integer adults) {
        this.adults = adults;
    }

    public Integer getChildren() {
        return children;
    }

    public void setChildren(Integer children) {
        this.children = children;
    }

    public Integer getInfants() {
        return infants;
    }

    public void setInfants(Integer infants) {
        this.infants = infants;
    }

    public Double getMinimumPrice() {
        return minimumPrice;
    }

    public void setMinimumPrice(Double minimumPrice) {
        this.minimumPrice = minimumPrice;
    }

    public Double getMaximumPrice() {
        return maximumPrice;
    }

    public void setMaximumPrice(Double maximumPrice) {
        this.maximumPrice = maximumPrice;
    }

    public static class Builder {
        private LocalDate checkIn;
        private LocalDate checkOut;
        private Integer adults;
        private Integer children;
        private Integer infants;
        private Double minimumPrice;
        private Double maximumPrice;

        public Builder() { }

        public Builder(TrimmedParameters trimmedParameters) {
            this.checkIn = trimmedParameters.checkIn;
            this.checkOut = trimmedParameters.checkOut;
            this.adults = trimmedParameters.adults;
            this.children = trimmedParameters.children;
            this.infants = trimmedParameters.infants;
            this.minimumPrice = trimmedParameters.minimumPrice;
            this.maximumPrice = trimmedParameters.maximumPrice;
        }

        public Builder checkIn(LocalDate checkIn) {
            this.checkIn = checkIn;
            return this;
        }

        public Builder checkOut(LocalDate checkOut) {
            this.checkOut = checkOut;
            return this;
        }

        public Builder adults(Integer adults) {
            this.adults = adults;
            return this;
        }

        public Builder children(Integer children) {
            this.children = children;
            return this;
        }

        public Builder infants(Integer infants) {
            this.infants = infants;
            return this;
        }

        public Builder minimumPrice(Double minimumPrice) {
            this.minimumPrice = minimumPrice;
            return this;
        }

        public Builder maximumPrice(Double maximumPrice) {
            this.maximumPrice = maximumPrice;
            return this;
        }

        public TrimmedParameters build() {
            return new TrimmedParameters(checkIn, checkOut, adults, children, infants, minimumPrice, maximumPrice);
        }
    }
}
