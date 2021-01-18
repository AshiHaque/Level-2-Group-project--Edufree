package group4.EduFree.userdetails;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class EduFreeUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDetailsRepository userDetailsRepository;
	
	@Override
	public EduFreeUserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		Optional<User> user = userDetailsRepository.findByUserName(userName);
		
		user.orElseThrow(() -> new UsernameNotFoundException("Not Found: " + userName));
		
		return user.map(EduFreeUserDetails::new).get();
	}
	
	// gets all users in the database
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<>();
		userDetailsRepository.findAll()
		.forEach(users::add);
		return users;
	}
	
	//gets one user specified by their id
	public Optional<User> getUser(long id) {
		return userDetailsRepository.findById(id);
	}
	
	//adds a user to the database
	public void addUser(User user) {
		userDetailsRepository.save(user);
	}
	
	//updates a user based on their id
	public void updateUser(long id, User user) {
		userDetailsRepository.save(user);
	}
	
	//deletes a user from the database
	public void deleteUser(long id) {
		userDetailsRepository.deleteById(id);
	}
}