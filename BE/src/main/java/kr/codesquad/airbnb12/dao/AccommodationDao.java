package kr.codesquad.airbnb12.dao;

import kr.codesquad.airbnb12.domain.Accommodation;
import kr.codesquad.airbnb12.dto.AccommodationSummary;
import kr.codesquad.airbnb12.dto.TrimmedParameters;

import java.util.List;

public interface AccommodationDao {

    List<AccommodationSummary> findAllAccommodationSummaries(TrimmedParameters trimmedParameters);

    Accommodation findAccommodationById(Long accommodationId);
}
