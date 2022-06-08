package vn.edu.socialplatform.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import vn.edu.socialplatform.model.User;

public interface UserRepo extends JpaRepository<User, Long>{

	public void deleteUserById(Long id);
	public User getById(Long id);
	
	@Query(value = "SELECT u FROM User u WHERE u.email IN :email")
	public Optional<User> findByEmail(String email);
	

}
