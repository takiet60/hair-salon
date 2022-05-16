package vn.edu.socialplatform.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import vn.edu.socialplatform.model.User;

public interface UserRepo extends JpaRepository<User, Long>{

	public void deleteUserById(Long id);
	public Optional<User> findUserById(Long id);
	
//	@Query("select * from user u where u.email = :email")
	public Optional<User> findByEmail(@Param("email") String email);
}
