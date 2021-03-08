package group4.EduFree.sidebar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Subject {
	@Id
	private String	Name;

	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}

}

