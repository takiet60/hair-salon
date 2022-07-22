package vn.edu.socialplatform.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import vn.edu.socialplatform.model.Chat;


@Repository
public interface ChatRepo extends JpaRepository<Chat, Long>{

	
	@Query(value = "SELECT c "
			+ "FROM Chat c "
			+ "WHERE c.userId = :userId AND c.guessId = :guessId "
			+ "OR c.guessId = :userId AND c.userId = :guessId"
			)
	public List<Chat> getChats(@Param("userId") long userId, @Param("guessId") long guessId);
}
