package group4.EduFree.loginpage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import group4.EduFree.authenticate.AuthenticationRequest;
import group4.EduFree.authenticate.AuthenticationResponse;
import group4.EduFree.userdetails.EduFreeUserDetailsService;
import group4.EduFree.util.JwtUtil;

@Controller
public class LoginController {
	@Autowired
	private NormalLoginService loginService;
	@Autowired
	private GoogleAuthenticationService googleService;
	@Autowired
	private FacebookAuthenticationService facebookService;
	@Autowired
	private GitHubAuthenticationService githubService;
	
	
	@CrossOrigin("http://localhost:3000")
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
		return loginService.createAuthenticationToken(authenticationRequest);
	}
	
	@RequestMapping(value = "/google", method = RequestMethod.POST)
	public void googlelogin() throws InterruptedException {
		googleService.wait();
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public void facebooklogin() throws InterruptedException {
		facebookService.wait();
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public void githublogin() throws InterruptedException {
		githubService.wait();
	}
	
}
