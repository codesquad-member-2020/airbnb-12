package kr.codesquad.airbnb12.controller;

import kr.codesquad.airbnb12.dto.BookingDetailsResponseDto;
import kr.codesquad.airbnb12.dto.BookingRequestDto;
import kr.codesquad.airbnb12.dto.FilteredAccommodationsResponseDto;
import kr.codesquad.airbnb12.response.ApiResponse;
import kr.codesquad.airbnb12.service.AccommodationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class AccommodationController {

    private final AccommodationService accommodationService;

    public AccommodationController(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @GetMapping("/accommodations")
    public ResponseEntity<ApiResponse<FilteredAccommodationsResponseDto>> getFilteredAccommodations(@RequestParam Map<String, String> requestParameters) {
        return new ResponseEntity<>(ApiResponse.OK(accommodationService.getFilteredAccommodations(requestParameters)), HttpStatus.OK);
    }

    @GetMapping("/accommodations/{accommodationId}")
    public ResponseEntity<ApiResponse<BookingDetailsResponseDto>> getBookingDetails(@PathVariable("accommodationId") Long accommodationId) {
        return new ResponseEntity<>(ApiResponse.OK(accommodationService.getBookingDetails(accommodationId)), HttpStatus.OK);
    }

    @PostMapping("/accommodations/{accommodationId}")
    public ResponseEntity<ApiResponse<Map<String, String>>> reserveAccommodation(@PathVariable("accommodationId") Long accommodationId, @RequestBody BookingRequestDto bookingRequestDto) {
        return new ResponseEntity<>(ApiResponse.OK(accommodationService.reserveAccommodation(accommodationId, bookingRequestDto)), HttpStatus.OK);
    }


}
