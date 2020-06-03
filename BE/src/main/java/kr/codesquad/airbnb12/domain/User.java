package kr.codesquad.airbnb12.domain;

public class User {

    private Long id;

    private String email;

    public User() {}

    public User(Long id, String email) {
        this.id = id;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public static User create(Long id, String email) {
        return new User(id, email);
    }
}
