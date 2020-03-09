package modelstests;

import com.codeclan.example.JobSwipe.models.SavedJob;
import com.codeclan.example.JobSwipe.models.User;

import org.junit.Before;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTest {


     private User user1;
     private SavedJob job1;
     private SavedJob job2;


     @Before
     public void before() {
        user1 = new User("Bob", 10000, 10000, 5, "Edinburgh");
        job1 = new SavedJob("Microsoft", "Junior Developer", 20000, 1, "Entry Level position using Java");
        job2 = new SavedJob("Startup", "Apprentice", 8000, 1, "Low Paid Position");
     }

    @Test
    public void testUserHasName(){
        assertEquals("Bob", user1.getName());
    }

    @Test
    public void testUserJobsBeginsEmpty(){
        assertEquals(0, user1.savedJobCount());
    }

    @Test
    public void testUserCanAddJobs(){
        user1.addSavedJob(job1);
        assertEquals(1, user1.savedJobCount());
    }

    @Test
    public void testUserHasSalaryWeight(){
         assertEquals(5, user1.getSalary_weight());
    }

    @Test
    public void testAddingJobUpdatesUserSalaryWeight(){
         user1.addSavedJob(job1);
         assertEquals(6, user1.getSalary_weight());
    }

    @Test
    public void testAddingSavedJobUpdatesUserSalaryIfLikingSalaryThatIsHigher(){
         user1.addSavedJob(job1);
         assertEquals(11666, user1.getSalary());
    }

    @Test
    public void testAddingSavedJobUpdatesUserSalaryIfLikingSalaryThatIsLower(){
        user1.addSavedJob(job2);
        assertEquals(9666, user1.getSalary());
    }

    @Test
    public void testCanResetSalaryExpectationToRegistrationDefault(){
        user1.addSavedJob(job1);
        user1.resetSalary();
        assertEquals(10000, user1.getSalary());
        assertEquals(5, user1.getSalary_weight());
    }







}
