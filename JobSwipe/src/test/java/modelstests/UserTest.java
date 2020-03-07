package modelstests;

import com.codeclan.example.JobSwipe.models.SavedJob;
import com.codeclan.example.JobSwipe.models.User;

import org.junit.Before;
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTest {


     User user1;
     SavedJob job1;

     @Before
     public void before() {
        user1 = new User("Bob", 10000, 5, "Edinburgh");
        job1 = new SavedJob("Microsoft", "Junior Developer", 25000, 5, "Entry Level position using Java");
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


}
