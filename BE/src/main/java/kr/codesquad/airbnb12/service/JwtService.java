package kr.codesquad.airbnb12.service;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class JwtService {

    @Value("${JWT_SECRET_KEY}")
    private String JWT_SECRET_KEY;

    public String makeJwtToken(String userEmail) {
        final SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS256;
        final String TYP = "typ";
        final String ALG = "HS256";
        Map<String, Object> header = new HashMap<>();
        header.put(TYP, "JWT");
        header.put(ALG, "HS256");
        Map < String, Object > payload = new HashMap<>();
        payload.put("USER_EMAIL", userEmail);
        return Jwts.builder()
                   .setHeader(header)
                   .setClaims(payload)
                   .signWith(SIGNATURE_ALGORITHM, JWT_SECRET_KEY.getBytes())
                   .compact();
    }

    public boolean isValidJwtToken(String decodedJwtTokenString) {
        try {
            Jwts.parser()
                .setSigningKey(JWT_SECRET_KEY.getBytes())
                .parseClaimsJws(decodedJwtTokenString)
                .getBody();
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}
