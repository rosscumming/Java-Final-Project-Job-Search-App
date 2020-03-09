package com.codeclan.example.JobSwipe.components;

import com.codeclan.example.JobSwipe.models.DislikedJob;
import com.codeclan.example.JobSwipe.models.SavedJob;
import com.codeclan.example.JobSwipe.models.User;
import com.codeclan.example.JobSwipe.repositories.DislikedJobRepository;
import com.codeclan.example.JobSwipe.repositories.SavedJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.codeclan.example.JobSwipe.repositories.UserRepository;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    SavedJobRepository savedJobRepository;

    @Autowired
    DislikedJobRepository dislikedJobRepository;

    public void run(ApplicationArguments args) throws Exception {


        User user1 = new User("Bob", 10000, 10000, 5, "Edinburgh");
        userRepository.save(user1);

        SavedJob job1 = new SavedJob("Microsoft", "Junior Developer", 25000, 5, "Entry Level position using Java");
        savedJobRepository.save(job1);

        DislikedJob job2 = new DislikedJob();
        dislikedJobRepository.save(job2);

        user1.addSavedJob(job1);
        userRepository.save(user1);

    }

}
