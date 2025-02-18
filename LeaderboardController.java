package com.internship.project.quiz.controller;

import com.internship.project.quiz.entity.Score;
import com.internship.project.quiz.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/leaderboard")
public class LeaderboardController {
    @Autowired
    private ScoreRepository scoreRepository;

    @GetMapping("/top")
    public List<Score> getTopScores() {
        return scoreRepository.findAll(Sort.by(Sort.Direction.DESC, "score"));
    }
}

