package group4.EduFree.content;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FileEntityRepository extends JpaRepository<FileEntityDetails, String> {

	//@Query("select u from FileEntityDetails u where u.Course = :course and u.Topic = :topic")
	//List<FileEntityDetails> findByCourseAndTopic(String course, String topic);

}
