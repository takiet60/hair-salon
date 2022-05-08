package vn.edu.socialplatform.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import vn.edu.socialplatform.model.User;

public interface UserRepo extends JpaRepository<User, Long>{

	public void deleteUserById(Long id);
	public Optional<User> findUserById(Long id);
}
