package group4.EduFree.sidebar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    @Autowired
    SubjectRepository subjectRepository;
    //adds a user to the database
    public void addMessage(Subject subject) {
        subjectRepository.save(subject);
    }
}