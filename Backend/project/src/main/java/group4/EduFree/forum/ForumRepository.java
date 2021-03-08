package group4.EduFree.forum;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ForumRepository extends JpaRepository<forum, Long> {
    @Query("select u from forum u where u.topicName = :topicName")
    public List<forum> fetchAllMessagesTopic(@Param("topicName") String topicName);

}
