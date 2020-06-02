package kr.codesquad.airbnb12.dto;

import java.time.LocalDate;

public class BookingRequestDto {

    private int adults;

    private int children;

    private int infants;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    public BookingRequestDto() { }

    public BookingRequestDto(int adults, int children, int infants, LocalDate checkInDate, LocalDate checkOutDate) {
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }

    public int getAdults() {
        return adults;
    }

    public void setAdults(int adults) {
        this.adults = adults;
    }

    public int getChildren() {
        return children;
    }

    public void setChildren(int children) {
        this.children = children;
    }

    public int getInfants() {
        return infants;
    }

    public void setInfants(int infants) {
        this.infants = infants;
    }

    public LocalDate getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(LocalDate checkInDate) {
        this.checkInDate = checkInDate;
    }

    public LocalDate getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(LocalDate checkOutDate) {
        this.checkOutDate = checkOutDate;
    }
}
