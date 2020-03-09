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


        User user2 = new User("Stephen", 50000,10000, 5, "Edinburgh");
        userRepository.save(user2);

        SavedJob job2 = new SavedJob("Sky", "Senior Developer", 75000, 5, "Executive Level position using Cobol");
        savedJobRepository.save(job2);

        user2.addSavedJob(job2);
        userRepository.save(user2);


        User user3 = new User("Luca", 30000, 10000, 5,"Rio");
        userRepository.save(user3);

        SavedJob job3 = new SavedJob("Zonal", "Experienced Developer", 55000, 5, "Mid Level position using Ruby");
        savedJobRepository.save(job3);

        user3.addSavedJob(job3);
        userRepository.save(user3);


        User user4 = new User("Chris", 100000,10000, 5, "Minnesota");
        userRepository.save(user4);

        SavedJob job4 = new SavedJob("Google", "Senior Developer", 150000,5, "Executive position using Binary");
        savedJobRepository.save(job4);

        user4.addSavedJob(job4);
        userRepository.save(user4);


        User user5 = new User("Evan", 80000,10000, 5, "Toronto");
        userRepository.save(user5);

        SavedJob job5 = new SavedJob("CodeClan Edinburgh", "Senior Lecturer", 100000, 5,"Senior Lecturer position teaching C++");
        savedJobRepository.save(job5);

        user5.addSavedJob(job5);
        userRepository.save(user5);


        User user6 = new User("Patrick", 180000, 10000, 5,"Linlithgow");
        userRepository.save(user6);

        SavedJob job6 = new SavedJob("MIT", "Senior Developer", 250000, 5,"Executive position using PseudoCode");
        savedJobRepository.save(job6);

        user6.addSavedJob(job6);
        userRepository.save(user6);


        User user7 = new User("Jen", 200000,10000, 5, "Yorkshire");
        userRepository.save(user7);

        SavedJob job7 = new SavedJob("International Korfball Federation", "Executive Developer", 251000,5, "Executive position using JavaScript");
        savedJobRepository.save(job7);

        user7.addSavedJob(job7);
        userRepository.save(user7);


        User user8 = new User("Sigurd", 100000,10000, 5, "Edinburgh");
        userRepository.save(user8);

        SavedJob job8 = new SavedJob("Oxfam", "Senior Developer", 125000,5, "Executive position using Python");
        savedJobRepository.save(job8);

        user8.addSavedJob(job8);
        userRepository.save(user8);


        User user9 = new User("Silvia", 200000,10000, 5, "Milan");
        userRepository.save(user9);

        SavedJob job9 = new SavedJob("Skyscanner", "Chief Technical Officer", 325000, 5,"Executive position overseeing all");
        savedJobRepository.save(job9);

        user9.addSavedJob(job9);
        userRepository.save(user9);


        User user10 = new User("Lauren", 70000, 10000, 5,"Edinburgh");
        userRepository.save(user10);

        SavedJob job10 = new SavedJob("CodeBar", "Senior Dev", 100000, 5,"Executive position using PHP");
        savedJobRepository.save(job10);

        user10.addSavedJob(job10);
        userRepository.save(user10);


        User user11 = new User("Andrew", 150000, 10000, 5,"Granton");
        userRepository.save(user11);

        SavedJob job11 = new SavedJob("University of Edinburgh", "Senior Experimental Scientist", 325000,5, "Executive position developing new languages using light snd sound waves");
        savedJobRepository.save(job11);

        user11.addSavedJob(job11);
        userRepository.save(user11)


        User user12 = new User("Cody", 140000, 10000, 5,"Pilton");
        userRepository.save(user12);

        SavedJob job12 = new SavedJob("SpaceX", "Theoretical Programmer", 170000,5, "Executive position developing interfaces for the next generation rockets");
        savedJobRepository.save(job12);

        user12.addSavedJob(job12);
        userRepository.save(user12);


        User user13 = new User("Catherine", 130000,10000, 5, "Burnside");
        userRepository.save(user13);

        SavedJob job13 = new SavedJob("CodeClan", "Senior Lecturer", 325000, 5,"Executive position helping educate the next generation of Software Developers");
        savedJobRepository.save(job13);

        user13.addSavedJob(job13);
        userRepository.save(user13);


        User user14 = new User("Jamie", 55000, 10000, 5,"Morningside");
        userRepository.save(user14);

        SavedJob job14 = new SavedJob("Apple", "Product Manager", 81000,5, "Executive development position");
        savedJobRepository.save(job14);

        user14.addSavedJob(job14);
        userRepository.save(user14);


        User user15 = new User("Ross", 58000,10000, 5, "Morningside");
        userRepository.save(user15);

        SavedJob job15 = new SavedJob("Inoapps", "Product Aesthetics Manager", 100000,5, "Executive designer position");
        savedJobRepository.save(job15);

        user15.addSavedJob(job15);
        userRepository.save(user15);


        User user16 = new User("Olivia", 90000,10000, 5, "London");
        userRepository.save(user16);

        SavedJob job16 = new SavedJob("Canadian Tourist Board", "Product Delivery Manager", 120000, 5,"Chief Technical Officer");
        savedJobRepository.save(job16);

        user16.addSavedJob(job16);
        userRepository.save(user16);


        User user17 = new User("James", 25000,10000, 5, "Scone");
        userRepository.save(user17);

        SavedJob job17 = new SavedJob("Zonal", "Tester", 30000, 5,"Junior development position");
        savedJobRepository.save(job17);

        user17.addSavedJob(job17);
        userRepository.save(user17);



        User user18 = new User("Andy", 52000,10000, 5, "Edinburgh");
        userRepository.save(user18);

        SavedJob job18 = new SavedJob("Zonal", "Product Developer", 71000, 5,"Mid-management development position");
        savedJobRepository.save(job18);

        user18.addSavedJob(job18);
        userRepository.save(user18);



        User user19 = new User("Andrew", 100000,10000, 5, "Alva");
        userRepository.save(user19);

        SavedJob job19 = new SavedJob("Cobol Inc.", "Legacy Implementation Officer", 130000, 5,"Executive Oversight position");
        savedJobRepository.save(job19);

        user19.addSavedJob(job19);
        userRepository.save(user19);


        User user20 = new User("Steve", 85000, 10000, 5,"Dunbar");
        userRepository.save(user20);

        SavedJob job20 = new SavedJob("Zonal", "Product Developer", 100000,5, "Management development position");
        savedJobRepository.save(job20);

        user20.addSavedJob(job20);
        userRepository.save(user20);


        User user21 = new User("Gary", 125000,10000, 5, "Edinburgh");
        userRepository.save(user21);

        SavedJob job21 = new SavedJob("Skyscanner", "Product Developer", 150000, 5,"Executive development position");
        savedJobRepository.save(job21);

        user21.addSavedJob(job21);
        userRepository.save(user21);


        User user22 = new User("Matteo", 87000, 10000, 5,"Rome");
        userRepository.save(user22);

        SavedJob job22 = new SavedJob("Italian Government", "Product Development Officer", 120000, 5,"Mid-management development position");
        savedJobRepository.save(job22);

        user22.addSavedJob(job22);
        userRepository.save(user22);


        User user23 = new User("Sujaul", 53000,10000, 5, "Edinburgh");
        userRepository.save(user23);

        SavedJob job23 = new SavedJob("Zonal", "Product Developer", 74000,5, "Mid-level development position");
        savedJobRepository.save(job23);

        user23.addSavedJob(job23);
        userRepository.save(user23);



    }

}
