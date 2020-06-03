package kr.codesquad.airbnb12.service;

import kr.codesquad.airbnb12.dao.UserDao;
import kr.codesquad.airbnb12.domain.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }


    public User findUserByEmail(String email) {
        return userDao.findUserByEmail(email);
    }

    public String insertNewUser(String email) {
        userDao.insertUserByEmail(email);
        return email;
    }
}
