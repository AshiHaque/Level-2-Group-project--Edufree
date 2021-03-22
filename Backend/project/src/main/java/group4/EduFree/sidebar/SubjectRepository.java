package group4.EduFree.sidebar;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SubjectRepository extends JpaRepository<Subject, String> {
	
	@Query(value = "SELECT * FROM subject WHERE LOWER(name) like %:name%", nativeQuery=true)
	List<Subject> findSubjectsBySearchString(@Param("name") String name);
}
