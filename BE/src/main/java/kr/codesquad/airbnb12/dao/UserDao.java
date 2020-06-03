package kr.codesquad.airbnb12.dao;

import kr.codesquad.airbnb12.domain.User;
import org.springframework.dao.support.DataAccessUtils;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class UserDao {

    private final JdbcTemplate jdbcTemplate;

    public UserDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public User findUserByEmail(String email) {
        String sql = "SELECT id, email FROM user WHERE email = ?";
        return DataAccessUtils.singleResult(jdbcTemplate.query(sql, new Object[]{email},
                (rs, rowNum) -> User.create(rs.getLong("id"), rs.getString("email"))));
    }

    public void insertUserByEmail(String email) {
        String sql = "INSERT INTO user (email) VALUES (?)";
        jdbcTemplate.update(sql, email);
    }
}
