package kr.codesquad.airbnb12.dto;

public class BookingDetailsResponseDto {

    private Long accommodationId;

    private double originalPrice;

    private double finalPrice;

    private double cleaningFee;

    private double serviceFee;

    private double tourismTax;

    public BookingDetailsResponseDto() { }

    public BookingDetailsResponseDto(Long accommodationId, double originalPrice, double finalPrice, double cleaningFee, double serviceFee, double tourismTax) {
        this.accommodationId = accommodationId;
        this.originalPrice = originalPrice;
        this.finalPrice = finalPrice;
        this.cleaningFee = cleaningFee;
        this.serviceFee = serviceFee;
        this.tourismTax = tourismTax;
    }

    public Long getAccommodationId() {
        return accommodationId;
    }

    public void setAccommodationId(Long accommodationId) {
        this.accommodationId = accommodationId;
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

    public double getCleaningFee() {
        return cleaningFee;
    }

    public void setCleaningFee(double cleaningFee) {
        this.cleaningFee = cleaningFee;
    }

    public double getServiceFee() {
        return serviceFee;
    }

    public void setServiceFee(double serviceFee) {
        this.serviceFee = serviceFee;
    }

    public double getTourismTax() {
        return tourismTax;
    }

    public void setTourismTax(double tourismTax) {
        this.tourismTax = tourismTax;
    }

    public static class Builder {
        Long accommodationId;
        double originalPrice;
        double finalPrice;
        double cleaningFee;
        double serviceFee;
        double tourismTax;

        public Builder() { }

        public Builder(BookingDetailsResponseDto bookingDetailsResponseDto) {
            this.accommodationId = bookingDetailsResponseDto.accommodationId;
            this.originalPrice = bookingDetailsResponseDto.originalPrice;
            this.finalPrice = bookingDetailsResponseDto.finalPrice;
            this.cleaningFee = bookingDetailsResponseDto.cleaningFee;
            this.serviceFee = bookingDetailsResponseDto.serviceFee;
            this.tourismTax = bookingDetailsResponseDto.tourismTax;
        }

        public Builder accommodationId(Long accommodationId) {
            this.accommodationId = accommodationId;
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

        public Builder cleaningFee(double cleaningFee) {
            this.cleaningFee = cleaningFee;
            return this;
        }

        public Builder serviceFee(double serviceFee) {
            this.serviceFee = serviceFee;
            return this;
        }

        public Builder tourismTax(double tourismTax) {
            this.tourismTax = tourismTax;
            return this;
        }

        public BookingDetailsResponseDto build() {
            return new BookingDetailsResponseDto(accommodationId, originalPrice, finalPrice, cleaningFee, serviceFee, tourismTax);
        }
    }
}
