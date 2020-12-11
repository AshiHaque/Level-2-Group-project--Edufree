package group4.EduFree.loginpage;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {
	
	@GetMapping("/login")
	public String sayHi() {
		return "loginpage";
	}
}
