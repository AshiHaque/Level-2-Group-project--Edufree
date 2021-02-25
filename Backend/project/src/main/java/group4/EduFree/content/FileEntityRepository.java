package group4.EduFree.content;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FileEntityRepository extends JpaRepository<FileEntityDetails, String> {
	
}

