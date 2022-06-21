package vn.edu.socialplatform.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="post") 
public class Post implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8754794843344361618L;

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private long id;
	private long userId;
	private int likes;
	private String userName;
	private String userImgUrl;
	private String content;
	private String imgUrl;
	private String time;
	public Post(long id, long userId, int likes, String userName, String userImgUrl, String content, String imgUrl, String time) {
		super();
		this.id = id;
		this.userId = userId;
		this.likes = likes;
		this.userName = userName;
		this.userImgUrl = userImgUrl;
		this.content = content;
		this.imgUrl = imgUrl;
		this.time = time;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserImgUrl() {
		return userImgUrl;
	}
	public void setUserImgUrl(String userImgUrl) {
		this.userImgUrl = userImgUrl;
	}
	public Post() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
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
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getTime() {
		return time;
	}
	public long getLikes() {
		return likes;
	}
	public void setLike(int likes) {
		this.likes = likes;
	}
	public void setTime(String time) {
		this.time = time;
	}
	
	
	
}
