package vn.edu.socialplatform.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.socialplatform.model.Chat;
import vn.edu.socialplatform.service.ChatService;

@RestController
@RequestMapping("/chat")

public class ChatController {

	private final ChatService chatService;
	
	public ChatController(ChatService chatService) {
		this.chatService = chatService;
	}
	
	@PostMapping("/add")
	public ResponseEntity<Chat> addChat(@RequestBody Chat chat) {
		Chat newChat = chatService.addChat(chat);
		return new ResponseEntity<Chat>(newChat, HttpStatus.OK);
	}
	
	@GetMapping("/getChats")
	public ResponseEntity<List<Chat>> getChats(@RequestParam long userId, @RequestParam long guessId) {
		return new ResponseEntity<List<Chat>>(chatService.getChats(userId, guessId), HttpStatus.OK);
	}
	
}
