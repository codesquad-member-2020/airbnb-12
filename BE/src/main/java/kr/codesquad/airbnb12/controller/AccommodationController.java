package kr.codesquad.airbnb12.controller;

import kr.codesquad.airbnb12.dto.FilteredAccommodationsResponseDto;
import kr.codesquad.airbnb12.response.ApiResponse;
import kr.codesquad.airbnb12.service.AccommodationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccommodationController {

    private final AccommodationService accommodationService;

    public AccommodationController(AccommodationService accommodationService) {
        this.accommodationService = accommodationService;
    }

    @GetMapping("/accommodations")
    public ResponseEntity<ApiResponse<FilteredAccommodationsResponseDto>> getAccommodationsList() {

        return new ResponseEntity<>(ApiResponse.OK(accommodationService.getAllAccommodations()), HttpStatus.OK);
    }
}
