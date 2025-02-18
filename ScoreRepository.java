package com.internship.project.quiz.repository;

import com.internship.project.quiz.entity.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, Long> { }

