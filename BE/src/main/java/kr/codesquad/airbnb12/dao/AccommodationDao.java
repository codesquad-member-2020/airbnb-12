package kr.codesquad.airbnb12.dao;

import kr.codesquad.airbnb12.domain.Accommodation;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class AccommodationDao implements Dao<Accommodation> {

    private final JdbcTemplate jdbcTemplate;

    public AccommodationDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Accommodation> findAll() {
        return null;
    }

    @Override
    public Accommodation findOne() {
        return null;
    }
}
