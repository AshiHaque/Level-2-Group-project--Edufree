package group4.EduFree.registerpage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import group4.EduFree.authenticate.AuthenticationResponse;
import group4.EduFree.userdetails.EduFreeUserDetails;
import group4.EduFree.userdetails.EduFreeUserDetailsService;
import group4.EduFree.userdetails.Favourite;
import group4.EduFree.userdetails.User;
import group4.EduFree.userdetails.UserDetailsRepository;
import group4.EduFree.userdetails.newEmail;
import group4.EduFree.userdetails.newPassword;
import group4.EduFree.userdetails.newUsername;

@RestController
public class RegisterController {

	@Autowired
	private UserDetailsRepository userDetailsRepository;
	@Autowired
	private EduFreeUserDetailsService userDetailsService;

	//whenever our web-site receives a request, this controller class will tell the service class what to do and will return the result.


	//Create
	@CrossOrigin("http://localhost:3000")
	@RequestMapping(method=RequestMethod.POST, value="/register")
	public ResponseEntity<?> addUser(@RequestBody User user) {
		userDetailsService.addUser(user);
		return ResponseEntity.ok("yes");
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

	@RequestMapping(method=RequestMethod.POST, value="/favourites")
	public void addFavourite(@RequestBody Favourite favourite) {
		Optional<User> user = userDetailsRepository.findByUserName(favourite.username);
		User existinguser = user.get();
		String list = existinguser.getFavourites();
		if (list.equals("")) {
			list = list + favourite.cardid;
		}else {
			list = list + "," + favourite.cardid;
		}
		existinguser.setFavourites(list);
		userDetailsService.addUser(existinguser);
	}

	@RequestMapping(method=RequestMethod.POST, value="/unfavourite")
	public void removeFavourite(@RequestBody Favourite favourite) {
		Optional<User> user = userDetailsRepository.findByUserName(favourite.username);
		User existinguser = user.get();
		String[] str_array = existinguser.getFavourites().split(",");
		List<String> list = new ArrayList<String>(Arrays.asList(str_array));
		list.remove(favourite.cardid);
		str_array = list.toArray(new String[0]);
		String dalist = String.join(",", str_array);
		existinguser.setFavourites(dalist);
		userDetailsService.addUser(existinguser);
	}

	//Create
	@CrossOrigin("http://localhost:3000")
	@RequestMapping(method=RequestMethod.POST, value="/register")
	public ResponseEntity<?> changeUsername(@RequestBody newUsername newUsername) {
		Optional<User> user = userDetailsRepository.findByUserName(newUsername.username);
		User userDetails = user.get();
		userDetails.setUserName(newUsername.newUsername);
		userDetailsService.addUser(userDetails);

		return ResponseEntity.ok("yes");

	}
	//Create
	@CrossOrigin("http://localhost:3000")
	@RequestMapping(method=RequestMethod.POST, value="/register")
	public ResponseEntity<?> changePassword(@RequestBody newPassword newPassword) {
		Optional<User> user = userDetailsRepository.findByUserName(newPassword.username);
		User userDetails = user.get();
		userDetails.setPassword(newPassword.newPassword);
		userDetailsService.addUser(userDetails);

		return ResponseEntity.ok("yes");

	}

	//Create
		@CrossOrigin("http://localhost:3000")
		@RequestMapping(method=RequestMethod.POST, value="/register")
		public ResponseEntity<?> changeEmail(@RequestBody newEmail newEmail) {
			Optional<User> user = userDetailsRepository.findByUserName(newEmail.username);
			User userDetails = user.get();
			userDetails.setEmail(newEmail.newEmail);
			userDetailsService.addUser(userDetails);

			return ResponseEntity.ok("yes");

		}

}
