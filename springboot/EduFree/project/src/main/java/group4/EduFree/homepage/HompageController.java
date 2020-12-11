package group4.EduFree.homepage;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HompageController {
	@RequestMapping("/")
	public String sayHi() {
		return "Homepage";
	}
}
