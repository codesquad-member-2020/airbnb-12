package kr.codesquad.airbnb12.dao;

import java.util.List;

public interface Dao<T> {

    List<T> findAll();

    T findOne();
}
