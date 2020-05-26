package kr.codesquad.airbnb12.domain;

public class Image {

    private Long id;

    private String url;

    private Long accommodation;

    public Image() {}

    public Image(Long id, String url, Long accommodation) {
        this.id = id;
        this.url = url;
        this.accommodation = accommodation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getAccommodation() {
        return accommodation;
    }

    public void setAccommodation(Long accommodation) {
        this.accommodation = accommodation;
    }

    public static Image create(Long id, String url, Long accommodation) {
        return new Image(id, url, accommodation);
    }
}
