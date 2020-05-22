package kr.codesquad.airbnb12.service;

import kr.codesquad.airbnb12.dao.AccommodationDaoImpl;
import kr.codesquad.airbnb12.domain.Image;
import kr.codesquad.airbnb12.dto.AccommodationSummary;
import kr.codesquad.airbnb12.dto.FilteredAccommodationsResponseDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AccommodationService {

    private final AccommodationDaoImpl accommodationDaoImpl;

    public AccommodationService(AccommodationDaoImpl accommodationDaoImpl) {
        this.accommodationDaoImpl = accommodationDaoImpl;
    }

    public FilteredAccommodationsResponseDto getAllAccommodations() {
        List<AccommodationSummary> accommodationSummaries = accommodationDaoImpl.findAllAccommodationSummaries();
        List<Image> allImages = accommodationDaoImpl.findAllImages();
        List<Integer> priceDistribution = new ArrayList<>();
        accommodationSummaries.forEach(accommodationSummary -> {
            List<String> images = allImages.stream()
                                           .filter(image -> accommodationSummary.getAccommodationId().equals(image.getAccommodation()))
                                           .map(Image::getUrl)
                                           .collect(Collectors.toList());
            accommodationSummary.setThumbnailImages(images);
        });
        return FilteredAccommodationsResponseDto.create(accommodationSummaries.size(), priceDistribution, accommodationSummaries);
    }
}
