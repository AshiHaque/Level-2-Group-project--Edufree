package group4.EduFree.forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class ForumController {
    @Autowired
    ForumService forumService;
    @Autowired
    ForumRepository forumRepository;
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(method= RequestMethod.POST, value="/message")
    public ResponseEntity<?> addMessage(@RequestBody forum forum) {
        forumService.addMessage(forum);
        return ResponseEntity.ok("yes");
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/getMessage")
    public ResponseEntity<?> getAllMessages() {
        return ResponseEntity.status(HttpStatus.OK).body(forumRepository.findAll());
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/getMessageTopic/{topicName}")
    public ResponseEntity<?> getMessageTopic( @PathVariable String topicName) {
        return ResponseEntity.status(HttpStatus.OK).body(forumRepository.fetchAllMessagesTopic(topicName));
    }
}
