package group4.EduFree.Sidebar;

import javax.persistence.Entity;

@Entity
public class Subject {

	private String	Name;

	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}

}

