package group4.EduFree.Sidebar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.sun.el.stream.Optional;

@Controller
public class SidebarController {


	@Autowired
	private SubjectRepository subjectRepository;
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/getsubjects")
	public ResponseEntity <?>  getSubjects() {
		return ResponseEntity.status(HttpStatus.OK).body(subjectRepository.findAll());


	}

	@Autowired
	private CourseRepository courserepository;
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/getcourses")
	public ResponseEntity<?>  getCourses() {
		return ResponseEntity.status(HttpStatus.OK).body(courserepository.findAll());



	}

	@Autowired
	private TopicRepository topicRepository;
	@CrossOrigin("http://localhost:3000")
	@GetMapping("/gettopics")
	public ResponseEntity<?>  getTopics() {
		return ResponseEntity.status(HttpStatus.OK).body(topicRepository.findAll());

	}
}
