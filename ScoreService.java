package com.internship.project.quiz.service;

import com.internship.project.quiz.entity.Score;
import com.internship.project.quiz.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreService {
    @Autowired
    private ScoreRepository scoreRepository;

    public void saveScore(Long userId, Long quizId, int score) {
        Score s = new Score();
        s.setUserId(userId);
        s.setQuizId(quizId);
        s.setScore(score);
        scoreRepository.save(s);
    }
}
