package kr.codesquad.airbnb12.dao;

import kr.codesquad.airbnb12.domain.Accommodation;
import kr.codesquad.airbnb12.domain.Image;
import kr.codesquad.airbnb12.domain.Location;
import kr.codesquad.airbnb12.dto.AccommodationSummary;
import kr.codesquad.airbnb12.dto.TrimmedParameters;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class AccommodationDaoImpl implements AccommodationDao {

    private final JdbcTemplate jdbcTemplate;

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public AccommodationDaoImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List<AccommodationSummary> findAllAccommodationSummaries(TrimmedParameters trimmedParameters) {
        SqlParameterSource namedParameters = new MapSqlParameterSource()
                                                .addValue("headCount", trimmedParameters.getAdults()+trimmedParameters.getChildren())
                                                .addValue("minimumPrice", trimmedParameters.getMinimumPrice())
                                                .addValue("maximumPrice", trimmedParameters.getMaximumPrice())
                                                .addValue("checkIn", trimmedParameters.getCheckIn())
                                                .addValue("checkOut", trimmedParameters.getCheckOut());
        String sql = "SELECT a.id, a.minimum_nights, a.maximum_nights, a.name, a.maximum_accommodates, " +
                            "a.original_price, a.sale_price, a.is_super_host, a.grade, l.city " +
                     "FROM accommodation a JOIN location l ON a.location = l.id " +
                     "WHERE a.maximum_accommodates >= :headCount AND a.sale_price BETWEEN :minimumPrice AND :maximumPrice " +
                     "AND (" +
                     "  (SELECT IF(IF(b.check_in_date > :checkIn, TRUE, FALSE), IF(b.check_in_date > :checkOut, TRUE, FALSE)," +
                     "             IF(b.check_out_date < :checkIn, TRUE, FALSE))" +
                     "              OR IF(b.check_out_date <= :checkIn, TRUE, FALSE ) AS result" +
                     "   FROM booking b" +
                     "   WHERE b.accommodation = a.id AND b.bookable = FALSE) IS NULL" +
                     "  OR" +
                     "  (SELECT IF(IF(b.check_in_date > :checkIn, TRUE, FALSE), IF(b.check_in_date > :checkOut, TRUE, FALSE)," +
                     "             IF(b.check_out_date < :checkIn, TRUE, FALSE))" +
                     "              OR IF(b.check_out_date <= :checkIn, TRUE, FALSE) AS result" +
                     "   FROM booking b" +
                     "   WHERE b.accommodation = a.id AND b.bookable = FALSE ) IS TRUE) " +
                     "ORDER BY a.id ASC;";
        return namedParameterJdbcTemplate.query(sql, namedParameters,
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
                     "FROM accommodation a JOIN location l ON l.id = a.location " +
                     "WHERE a.id = ?";
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
                                                 .location(new Location(rs.getLong("location"),
                                                                        rs.getString("country"),
                                                                        rs.getString("city")))
                                                 .build());
    }

    public List<Image> findImagesByAccommodationIds(List<Long> accommodationIds) {
        SqlParameterSource namedParameters = new MapSqlParameterSource("accommodationIds", accommodationIds);
        String sql = "SELECT id, url, accommodation FROM image " +
                     "WHERE accommodation IN (:accommodationIds)";
        return namedParameterJdbcTemplate.query(sql, namedParameters, (rs, rowNum) ->
            Image.create(rs.getLong("id"),
                         rs.getString("url"),
                         rs.getLong("accommodation"))
        );
    }
}
