package group4.EduFree.sidebar;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	
	@Id
	private long ID;
	private String Title;
	private String Description;
	private String ImageURI;
	private String SubjectName;

	public String getTitle() {
		return Title;
	}
	public void setTitle(String title) {
		Title = title;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public String getImageURI() {
		return ImageURI;
	}
	public void setImageURI(String imageURI) {
		ImageURI = imageURI;
	}
	public String getSubjectName() {
		return SubjectName;
	}
	public void setSubjectName(String subjectName) {
		SubjectName = subjectName;
	}

}

