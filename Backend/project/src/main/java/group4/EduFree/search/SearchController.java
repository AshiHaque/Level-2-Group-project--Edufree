package group4.EduFree.search;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import group4.EduFree.sidebar.Subject;
import group4.EduFree.sidebar.SubjectRepository;

@RestController
@RequestMapping("/search")
@CrossOrigin(origins = "http://localhost:3000")
public class SearchController {
	@Autowired
	private SubjectRepository subjectRepository;
	@GetMapping(path="/{name}")
	public List<Subject> getSubjectsBySearchString(@PathVariable("name") String name) {
		System.out.println(name);
		return subjectRepository.findSubjectsBySearchString(name);
	}
}
