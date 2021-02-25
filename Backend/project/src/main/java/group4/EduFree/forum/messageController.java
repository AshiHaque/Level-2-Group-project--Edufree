package group4.EduFree.forum;
import group4.EduFree.content.DownloadFileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class messageController {
    @Autowired
    MessagingService messagingService;
    @Autowired
    MessageRepository messageRepository;
    @CrossOrigin("http://localhost:3000")
    @RequestMapping(method= RequestMethod.POST, value="/message")
    public ResponseEntity<?> addMessage(@RequestBody message message) {
        messagingService.addMessage(message);
        return ResponseEntity.ok("yes");
    }
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/getMessage")
    public ResponseEntity<?> getAllMessages() {
        return ResponseEntity.status(HttpStatus.OK).body(messageRepository.findAll());
    }
}
