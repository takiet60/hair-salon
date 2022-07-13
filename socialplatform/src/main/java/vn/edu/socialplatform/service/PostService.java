package vn.edu.socialplatform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import vn.edu.socialplatform.model.Post;
import vn.edu.socialplatform.repo.PostRepo;

@Service
public class PostService {
	
	private final PostRepo postRepo;
	
	public PostService(PostRepo postRepo) {
		this.postRepo = postRepo;
	}
	
	public Post add(Post post) {
		return postRepo.save(post);
	}
	
	public List<Post> getAllPost() {
		return postRepo.findAll();
	}
	
	public void updateLikes(int likes, long id) {
		postRepo.updateLikes(likes, id);
	}
	
	public List<Post> getPostsByUserId(long userId) {
		return postRepo.getPostsByUserId(userId);
	}
}
