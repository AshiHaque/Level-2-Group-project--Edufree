package group4.EduFree.forum;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<message, Long> {
}
