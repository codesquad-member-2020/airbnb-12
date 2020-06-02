package kr.codesquad.airbnb12.controller;

import kr.codesquad.airbnb12.domain.User;
import kr.codesquad.airbnb12.response.ApiResponse;
import kr.codesquad.airbnb12.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/auth/github")
    public ResponseEntity loginGithub(HttpServletResponse response) {
        response.setHeader("Location", authService.createGithubAuthTokenUri());
        return new ResponseEntity(HttpStatus.SEE_OTHER);
    }

    @GetMapping("/callback/github")
    public ResponseEntity<ApiResponse<String>> githubCallback(@RequestParam("code") String code, HttpServletResponse response) {
        String githubAccessToken = authService.getGithubAccessToken(code);
        User user = authService.getUserInformationFromToken(githubAccessToken);
        String jwtToken = authService.makeJwtToken(user);
        response.setHeader("Authorization", jwtToken);
        return new ResponseEntity<>(ApiResponse.OK("OK"), HttpStatus.OK);
    }
}
