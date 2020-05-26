package kr.codesquad.airbnb12.response;

public class ApiResponse<T> {

    private boolean status;

    private T data;

    public ApiResponse(boolean status, T data) {
        this.status = status;
        this.data = data;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public static <T> ApiResponse<T> OK(T data) {
        return new ApiResponse(true, data);
    }
}
