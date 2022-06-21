package vn.edu.socialplatform.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.socialplatform.model.Post;
import vn.edu.socialplatform.service.PostService;

@RestController
@RequestMapping("/post")
public class PostController {
	
	private final PostService postService;
	
	public PostController(PostService postService) {
		this.postService = postService;
	}
	
	@PostMapping("/add")
	public ResponseEntity<Post> add(@RequestBody Post post) {
		Post newPost = postService.add(post);
		return new ResponseEntity<Post>(newPost, HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Post>> getAllPost() {
		List<Post> listPosts = postService.getAllPost();
		return new ResponseEntity<List<Post>>(listPosts, HttpStatus.OK);
	}
	
	@Transactional
	@PatchMapping("/updateLikes")
	public void updateLikes(@RequestParam int likes, @RequestParam long id) {
		postService.updateLikes(likes, id);
	}
	
}
