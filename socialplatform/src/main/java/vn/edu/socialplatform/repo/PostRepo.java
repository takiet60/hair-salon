package vn.edu.socialplatform.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import vn.edu.socialplatform.model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Long>{

	@Modifying
	@Query(value = "UPDATE Post p SET p.likes = :likes WHERE p.id = :id")
	public void updateLikes(@Param("likes") int likes, @Param("id") long id);
	
	@Query(value = "SELECT p FROM Post p WHERE p.userId = :userId")
	public List<Post> getPostsByUserId(@Param("userId") long userId);
	
	@Query(value = "SELECT p FROM Post p WHERE p.id = :id")
	public Post getPostById(@Param("id") long id);
}
