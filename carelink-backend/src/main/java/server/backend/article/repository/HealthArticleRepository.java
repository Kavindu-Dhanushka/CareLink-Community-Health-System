package server.backend.article.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.backend.article.entity.HealthArticle;

public interface HealthArticleRepository extends JpaRepository<HealthArticle, Long> {
}