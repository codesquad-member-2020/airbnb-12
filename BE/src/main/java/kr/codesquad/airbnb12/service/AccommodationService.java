package kr.codesquad.airbnb12.service;

import kr.codesquad.airbnb12.dao.AccommodationDao;
import org.springframework.stereotype.Service;

@Service
public class AccommodationService {

    private final AccommodationDao accommodationDao;

    public AccommodationService(AccommodationDao accommodationDao) {
        this.accommodationDao = accommodationDao;
    }

    public void getAllAccommodations() {
        accommodationDao.findAll();
    }
}
