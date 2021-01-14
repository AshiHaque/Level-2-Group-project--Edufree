package group4.EduFree.registerpage;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import group4.EduFree.userdetails.EduFreeUserDetailsService;
import group4.EduFree.userdetails.User;

@RestController
public class RegisterController {
	
	@Autowired
	private EduFreeUserDetailsService userDetailsService;
	
	//whenever our web-site receives a request, this controller class will tell the service class what to do and will return the result.
	

	//Create
	@RequestMapping(method=RequestMethod.POST, value="/register")
	public void addUser(@RequestBody User user) {
		userDetailsService.addUser(user);
	}
	//find all (Read)
	@RequestMapping("/register")
	public List<User> sayHi() {
		return userDetailsService.getAllUsers();
	}
	
	//find one (Read)
	@RequestMapping("/register/{id}")
	public Optional<User> getUser(@PathVariable long id) {
		return userDetailsService.getUser(id);
	}
	
	//Update
	@RequestMapping(method=RequestMethod.PUT, value="/register/{id}")
	public void updateUser(@RequestBody User user, @PathVariable long id) {
		userDetailsService.updateUser(id, user);
	}
	
	//Delete
	@RequestMapping(method=RequestMethod.DELETE, value="/register/{id}")
	public void deleteUser(@PathVariable long id) {
		userDetailsService.deleteUser(id);
	}
}
