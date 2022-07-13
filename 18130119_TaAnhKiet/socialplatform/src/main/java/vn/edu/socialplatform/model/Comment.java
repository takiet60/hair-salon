package vn.edu.socialplatform.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7428588135919765860L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private long id;
	private long postId;
	private long userId;
	private String userImgUrl;
	private String content;
	private String time;
	public Comment(long id, long postId, long userId, String userImgUrl, String content, String time) {
		super();
		this.id = id;
		this.postId = postId;
		this.userId = userId;
		this.userImgUrl = userImgUrl;
		this.content = content;
		this.time = time;
	}
	public Comment() {
		super();
	}
	public long getPostId() {
		return postId;
	}
	public void setPostId(long postId) {
		this.postId = postId;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getUserImgUrl() {
		return userImgUrl;
	}
	public void setUserImgUrl(String userImgUrl) {
		this.userImgUrl = userImgUrl;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	
	
}
