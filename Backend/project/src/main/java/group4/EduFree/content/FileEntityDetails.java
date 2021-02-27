package group4.EduFree.content;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Entity
public class FileEntityDetails {
	@Id
	private String name;
	private String url;
	private String type;
	private String Topic;
	
	public FileEntityDetails(MultipartFile file) {
		this.name = StringUtils.cleanPath(file.getOriginalFilename());
		this.url = ServletUriComponentsBuilder.fromCurrentContextPath()
				.path("/downloadFile/")
				.path(this.name)
				.toUriString();
		this.type = file.getContentType();
		
	}
	
	public FileEntityDetails(){}

	
	public FileEntityDetails(Long id, String name, String url, String type, String Topic) {
		super();
		this.name = name;
		this.url = url;
		this.type = type;
		this.Topic = Topic;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public String getTopic() {
		return Topic;
	}

	public void setTopic(String topic) {
		Topic = topic;
	}
	
}
