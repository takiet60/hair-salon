package vn.edu.socialplatform.service;

import java.util.List;

import org.springframework.stereotype.Service;

import vn.edu.socialplatform.model.Chat;
import vn.edu.socialplatform.repo.ChatRepo;

@Service
public class ChatService {

	private final ChatRepo chatRepo;
	
	public ChatService(ChatRepo chatRepo) {
		this.chatRepo = chatRepo;
	}
	
	public Chat addChat(Chat chat) {
		return chatRepo.save(chat);
	}
	
	public List<Chat> getChats(long userId, long guessId) {
		return chatRepo.getChats(userId, guessId);
	}
}
