package vn.edu.socialplatform.service;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import vn.edu.socialplatform.exception.UserNotFoundException;
import vn.edu.socialplatform.model.User;
import vn.edu.socialplatform.repo.UserRepo;

@Service
public class UserService {
	
	private final UserRepo userRepo;
	
	@PersistenceContext
	private EntityManager em;
		
	@Autowired
	public UserService(UserRepo userRepo) {
		this.userRepo = userRepo;
	}
	
	public User addUser(User user) {
		user.setUserCode(UUID.randomUUID().toString());
		return userRepo.save(user);
	}
	
	public List<User> findAllUsers() {
		return userRepo.findAll();
	}
	
	public User updateUser(User user) {
		return userRepo.save(user);
	}
	
	public User findUserById(Long id) {
		return userRepo.getById(id);
//				.orElseThrow(() -> new UserNotFoundException("User by id:" + id + " was not found!"));
	}
	
	public void deleteUser(Long id) {
		userRepo.deleteUserById(id);
	}
//		return (User) em.createQuery("FROM user u WHERE u.email = :email").setParameter("email", email);

	public User findByEmail(String email) {
		Optional<User> user = Optional.ofNullable(userRepo.findByEmail(email).orElseThrow(() -> new UserNotFoundException("User by email:" + email + " was not found!")));;
		return user.get();
	}

	
}
