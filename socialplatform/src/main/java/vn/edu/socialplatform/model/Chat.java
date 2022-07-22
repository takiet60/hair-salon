package vn.edu.socialplatform.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "chat")
public class Chat implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -7742864394196456168L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private long id;
	
	private long userId;
	private long guessId;
	
	private String time;
	private String message;
	public Chat() {
		super();
	}
	public Chat(long id, long userId, long guessId, String time, String message) {
		super();
		this.id = id;
		this.userId = userId;
		this.guessId = guessId;
		this.time = time;
		this.message = message;
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
	public long getGuessId() {
		return guessId;
	}
	public void setGuessId(long guessId) {
		this.guessId = guessId;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	
	
}
