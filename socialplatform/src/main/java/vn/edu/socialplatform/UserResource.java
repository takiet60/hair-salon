package vn.edu.socialplatform;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.socialplatform.model.User;
import vn.edu.socialplatform.service.UserService;

@RestController
@RequestMapping("/user")
public class UserResource {
	
	@Autowired
	private final UserService userService;
	
	public UserResource(UserService userService) {
		this.userService = userService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = userService.findAllUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@GetMapping("/findById")
	public ResponseEntity<User> getUserById(@RequestParam("id") Long id) {
		User user = userService.findUserById(id);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	 @GetMapping(value = {"/findByEmail"}, produces = {"application/json", "application/hal+json"})
	public ResponseEntity<User> getUserByEmail(@RequestParam("email") String email) {
		User user = userService.findByEmail(email);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<User> addEmployee(@RequestBody User user) {
		User newUser = userService.addUser(user);
		return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<User> updateEmployee(@RequestBody User user) {
		User newUser = userService.updateUser(user);
		return new ResponseEntity<User>(newUser, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
		userService.deleteUser(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
