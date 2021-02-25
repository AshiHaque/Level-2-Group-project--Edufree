package group4.EduFree.content;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.multipart.MultipartFile;

public interface FileEntityRepository extends JpaRepository<FileEntityDetails, Long> {

	//List<FileEntityDetails> findByFavourites(String[] favourites);
}

