package vn.edu.socialplatform.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import vn.edu.socialplatform.model.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Long> {
	
	@Query(value="SELECT c from Comment c where c.postId = :postId")
	public List<Comment> getAllCommentsByPostId(@Param("postId") long postId);
	
}
