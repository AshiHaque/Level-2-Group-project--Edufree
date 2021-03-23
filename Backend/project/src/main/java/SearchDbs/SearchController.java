package SearchDbs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


//import group4.EduFree.Sidebar.CourseRepository;

import group4.EduFree.userdetails.User;

@CrossOrigin("http://localhost:3000")
@RequestMapping()
public class SearchController {
//  @Autowired
//  CourseRepository courseRepository;
//	//find all (Read)
//		@RequestMapping(method=RequestMethod.POST, value="/searchDbs")
//		public List<User> sayHi(@RequestBody String search) {
//			return courseRepository.findByName(search);
//		}

	
//	//@Query("select * from user")
//	public void test(@RequestBody String user) {
//		System.out.println("user"+user);
//	
//		
//	}
}

