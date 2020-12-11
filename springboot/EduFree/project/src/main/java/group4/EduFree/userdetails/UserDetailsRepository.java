package group4.EduFree.userdetails;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

//gives us easy access to the CRUD operations (Create, Read, Update, Delete)
public interface UserDetailsRepository extends JpaRepository <User, Long> {
	Optional<User> findByUserName(String userName);
}
