package group4.EduFree.forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForumService {
    @Autowired
    ForumRepository forumRepository;
    //adds a user to the database
    public void addMessage(forum forum) {
        forumRepository.save(forum);
    }
}
