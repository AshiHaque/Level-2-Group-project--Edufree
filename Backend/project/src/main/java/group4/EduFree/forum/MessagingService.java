package group4.EduFree.forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessagingService {
    @Autowired
    MessageRepository messageRepository;
    //adds a user to the database
    public void addMessage(message message) {
        messageRepository.save(message);
    }
}
