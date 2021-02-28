package group4.EduFree.Sidebar;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class SidebarController {

	@Autowired
	private SubjectRepository subjectRepository;
	@RequestMapping(method=RequestMethod.GET, value="/getsubjects")
	public ResponseEntity <List<Subject>>  getSubjects() {
		return ResponseEntity.status(HttpStatus.OK).body(subjectRepository.findAll());


	}

	@Autowired
	private CourseRepository courserepository;
	@RequestMapping(method=RequestMethod.GET, value="/getcourses")
	public ResponseEntity<List<Course>>  getCourses() {
		return ResponseEntity.status(HttpStatus.OK).body(courserepository.findAll());



	}

	@Autowired
	private TopicRepository topicRepository;
	@RequestMapping(method=RequestMethod.GET, value="/gettopics")
	public ResponseEntity<List<Topic>>  getTopics() {
		return ResponseEntity.status(HttpStatus.OK).body(topicRepository.findAll());

	}
}
