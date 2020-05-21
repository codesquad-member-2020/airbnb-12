package kr.codesquad.airbnb12.response;

public class ApiResponse<T> {

    private boolean status;

    private T data;

    public ApiResponse(boolean status, T data) {
        this.status = status;
        this.data = data;
    }
}
