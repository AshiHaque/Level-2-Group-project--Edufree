package group4.EduFree.loginpage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import group4.EduFree.authenticate.AuthenticationRequest;

@RestController
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
	
	@RequestMapping(value = "/facebook", method = RequestMethod.POST)
	public void facebooklogin() throws InterruptedException {
		facebookService.wait();
	}
	
	@RequestMapping(value = "/github", method = RequestMethod.POST)
	public void githublogin() throws InterruptedException {
		githubService.wait();
	}
	
}
