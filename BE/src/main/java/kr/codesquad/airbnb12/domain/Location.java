package kr.codesquad.airbnb12.domain;

public class Location {

    private Long id;

    private String country;

    private String city;

    public Location() { }

    public Location(Long id, String country, String city) {
        this.id = id;
        this.country = country;
        this.city = city;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public static Location create(Long id, String country, String city) {
        return new Location(id, country, city);
    }
}
