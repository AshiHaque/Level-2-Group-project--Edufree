package group4.EduFree.sidebar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class SubjectController {
    @Autowired
    SubjectService subjectService;
    @Autowired
    SubjectRepository forumRepository;
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(method= RequestMethod.POST, value="/subject")
    public ResponseEntity<?> addMessage(@RequestBody Subject subject) {
        subjectService.addMessage(subject);
        return ResponseEntity.ok("yes");
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/getSubject")
    public ResponseEntity<?> getAllMessages() {
        return ResponseEntity.status(HttpStatus.OK).body(forumRepository.findAll());
    }
}

