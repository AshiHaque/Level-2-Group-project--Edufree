package group4.EduFree.Sidebar;

import javax.persistence.Entity;
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

