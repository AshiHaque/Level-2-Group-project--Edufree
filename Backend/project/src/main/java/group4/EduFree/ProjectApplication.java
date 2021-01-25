package group4.EduFree;


import group4.EduFree.content.FileEntityRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import group4.EduFree.userdetails.UserDetailsRepository;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = {UserDetailsRepository.class,FileEntityRepository.class})
public class ProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}

}
