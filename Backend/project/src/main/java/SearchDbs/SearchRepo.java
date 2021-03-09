package SearchDbs;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import group4.EduFree.userdetails.User;


	public interface SearchRepo extends JpaRepository <User, Long> {
//		Optional<User> findByUserName(String userName);
	}


