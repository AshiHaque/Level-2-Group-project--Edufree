package group4.EduFree.loginpage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import group4.EduFree.authenticate.AuthenticationRequest;
import group4.EduFree.authenticate.AuthenticationResponse;
import group4.EduFree.userdetails.EduFreeUserDetailsService;
import group4.EduFree.util.JwtUtil;

@Service
public class NormalLoginService {
	
	@Autowired
	private EduFreeUserDetailsService userDetailsService;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtUtil jwtTokenUtil;

	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));

		} catch (BadCredentialsException e){
			throw new Exception("Incorrect username or password");
		}

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		String jwt = jwtTokenUtil.generateToken(userDetails);
		jwt=authenticationRequest.getUsername();
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
}
