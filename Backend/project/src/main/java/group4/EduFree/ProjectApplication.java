package group4.EduFree;

import group4.EduFree.forum.ForumRepository;
import group4.EduFree.sidebar.SubjectRepository;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import group4.EduFree.content.FileEntityRepository;
import group4.EduFree.content.FileStorageProperties;
import group4.EduFree.userdetails.UserDetailsRepository;

@SpringBootApplication
@EnableConfigurationProperties({FileStorageProperties.class})
@EnableJpaRepositories(basePackageClasses = {UserDetailsRepository.class, FileEntityRepository.class, ForumRepository.class, SubjectRepository.class})
public class ProjectApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}

}
