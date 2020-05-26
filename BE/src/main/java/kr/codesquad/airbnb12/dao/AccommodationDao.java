package kr.codesquad.airbnb12.dao;

import kr.codesquad.airbnb12.domain.Accommodation;
import kr.codesquad.airbnb12.dto.AccommodationSummary;

import java.util.List;

public interface AccommodationDao {

    List<AccommodationSummary> findAllAccommodationSummaries();

    Accommodation findAccommodationById(Long accommodationId);
}
