package group4.EduFree.sidebar;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import group4.EduFree.userdetails.User;



public interface CourseRepository extends JpaRepository<Course, Long> {

	//List<User> findByName(String search);

 
}