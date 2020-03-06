package com.codeclan.example.JobSwipe.components;

import com.codeclan.example.JobSwipe.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.codeclan.example.JobSwipe.repositories.UserRepository;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    public void run(ApplicationArguments args) throws Exception {


        User user1 = new User("Bob", 10000, "Edinburgh");
        userRepository.save(user1);

    }

}
