package kr.codesquad.airbnb12.dao;

import kr.codesquad.airbnb12.domain.Accommodation;
import kr.codesquad.airbnb12.domain.Image;
import kr.codesquad.airbnb12.domain.Location;
import kr.codesquad.airbnb12.dto.AccommodationSummary;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class AccommodationDaoImpl implements AccommodationDao {

    private final JdbcTemplate jdbcTemplate;

    public AccommodationDaoImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<AccommodationSummary> findAllAccommodationSummaries() {
        String sql = "SELECT a.id, a.name, a.maximum_accommodates, a.original_price, " +
                            "a.sale_price, a.is_super_host, a.grade, l.city " +
                     "FROM accommodation a JOIN location l on l.id = a.location " +
                     "ORDER BY a.id ASC";
        return jdbcTemplate.query(sql,
                (rs, rowNum) -> new AccommodationSummary.Builder()
                                                        .accommodationId(rs.getLong("id"))
                                                        .title(rs.getString("name"))
                                                        .maximumAccommodates(rs.getInt("maximum_accommodates"))
                                                        .originalPrice(rs.getDouble("original_price"))
                                                        .finalPrice(rs.getDouble("sale_price"))
                                                        .superHost(rs.getBoolean("is_super_host"))
                                                        .grade(rs.getDouble("grade"))
                                                        .location(rs.getString("city"))
                                                        .build());
    }

    @Override
    public Accommodation findAccommodationById(Long accommodationId) {
        String sql = "SELECT a.id, a.name, a.description, a.maximum_accommodates, a.minimum_nights, " +
                            "a.maximum_nights, a.original_price, a.sale_price, a.cleaning_fee, a.is_super_host, " +
                            "a.grade, a.location, l.id, l.country, l.city " +
                     "FROM accommodation a JOIN location l ON location.id = a.location " +
                     "WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{accommodationId},
                (rs, rowNum) -> new Accommodation.Builder()
                                                 .id(rs.getLong("id"))
                                                 .name(rs.getString("name"))
                                                 .description(rs.getString("description"))
                                                 .maximumAccommodates(rs.getInt("maximum_accommodates"))
                                                 .minimumNights(rs.getInt("minimum_nights"))
                                                 .maximumNights(rs.getInt("maximum_nights"))
                                                 .originalPrice(rs.getDouble("original_price"))
                                                 .salePrice(rs.getDouble("sale_price"))
                                                 .cleaningFee(rs.getDouble("cleaning_fee"))
                                                 .superHost(rs.getBoolean("is_super_host"))
                                                 .grade(rs.getDouble("grade"))
                                                 .location(new Location(rs.getLong("location"), rs.getString("country"), rs.getString("city")))
                                                 .build());
    }

    public List<Image> findAllImages() {
        String sql = "SELECT id, url, accommodation FROM image";
        return jdbcTemplate.query(sql, (rs, rowNum) -> Image.create(rs.getLong("id"),
                                                                    rs.getString("url"),
                                                                    rs.getLong("accommodation")));
    }
}
