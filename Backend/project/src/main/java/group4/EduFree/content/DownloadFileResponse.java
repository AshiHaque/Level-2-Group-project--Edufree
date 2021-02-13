package group4.EduFree.content;

import java.util.List;

public class DownloadFileResponse {
	private List<FileEntityDetails> content;

	
	
	public DownloadFileResponse(List<FileEntityDetails> content) {
		super();
		this.content = content;
	}

	public List<FileEntityDetails> getContent() {
		return content;
	}

	public void setContent(List<FileEntityDetails> content) {
		this.content = content;
	}
	
}
