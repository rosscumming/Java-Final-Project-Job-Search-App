package com.codeclan.example.JobSwipe;

import com.codeclan.example.JobSwipe.models.User;
import com.codeclan.example.JobSwipe.repositories.UserRepository;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;


@SpringBootTest
class JobSwipeApplicationTests {

	@Autowired
	UserRepository userRepository;

	private User user;


	@Test
	void contextLoads() {
	}





}
