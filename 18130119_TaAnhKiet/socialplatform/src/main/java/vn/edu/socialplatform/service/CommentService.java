package vn.edu.socialplatform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import vn.edu.socialplatform.model.Comment;
import vn.edu.socialplatform.repo.CommentRepo;

@Service
public class CommentService {
	
	private final CommentRepo commentRepo;
	
	public CommentService(CommentRepo commentRepo) {
		this.commentRepo = commentRepo;
	}
	
	public Comment add(Comment comment) {
		return this.commentRepo.save(comment);
	}
	
	public List<Comment> getAllCommentByPostId(long postId){
		return this.commentRepo.getAllCommentsByPostId(postId);
	}
}
