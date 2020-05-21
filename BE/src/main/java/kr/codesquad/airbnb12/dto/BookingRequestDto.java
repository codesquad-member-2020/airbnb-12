package kr.codesquad.airbnb12.dto;

import java.time.LocalDate;

public class BookingRequestDto {

    private Long accommodationId;

    private int adults;

    private int children;

    private int infants;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;
}
