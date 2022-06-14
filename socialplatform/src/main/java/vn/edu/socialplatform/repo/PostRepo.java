package vn.edu.socialplatform.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vn.edu.socialplatform.model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Long>{

}
