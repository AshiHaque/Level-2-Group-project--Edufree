package group4.EduFree.util;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtUtil {
	private String SECRET_KEY = "SECRET";
	
		//retrieve username from jwt token
		public String extractUsername(String token) {
			return extractClaim(token, Claims::getSubject);
		}
		//retrieve expiration date from jwt token
		public Date extractExpiration(String token) {
			return extractClaim(token, Claims::getExpiration);
		}
		public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
			final Claims claims = extractAllClaims(token);
			return claimsResolver.apply(claims);
		}
	    //for retrieving any information from token we will need the secret key
		private Claims extractAllClaims(String token) {
			return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
		}
		//check if the token has expired
		private Boolean isTokenExpired(String token) {
			final Date expiration = extractExpiration(token);
			return expiration.before(new Date());
		}
		//generate token for user
		public String generateToken(UserDetails userDetails) {
			Map<String, Object> claims = new HashMap<>();
			return createToken(claims, userDetails.getUsername());
			}
		public String createToken(Map<String, Object> claims, String subject) {
			return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
					.setExpiration(new Date(System.currentTimeMillis() + 100 * 60 * 60 * 10))
					.signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
			}
		public boolean validateToken(String token, UserDetails userDetails) {
			final String username = extractUsername(token);
			return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
		}
}
