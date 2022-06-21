package vn.edu.socialplatform.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.socialplatform.model.Comment;
import vn.edu.socialplatform.service.CommentService;

@RestController
@RequestMapping("/comment")
public class CommentController {

	private final CommentService commentService;
	
	public CommentController(CommentService commentService) {
		this.commentService = commentService;
	}
	
	@PostMapping("/add")
	public ResponseEntity<Comment> add(@RequestBody Comment comment) {
		Comment newComment = this.commentService.add(comment);
		return new ResponseEntity<Comment>(newComment, HttpStatus.OK);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Comment>> getAllCommentsByPostId(@RequestParam long postId) {
		List<Comment> comments = this.commentService.getAllCommentByPostId(postId);
		return new ResponseEntity<List<Comment>>(comments, HttpStatus.OK);
	}
}
