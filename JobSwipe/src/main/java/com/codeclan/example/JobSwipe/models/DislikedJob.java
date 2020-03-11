package com.codeclan.example.JobSwipe.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "dislikedjobs")
public class DislikedJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String reedId;

    @JsonIgnoreProperties("dislikedJobs")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_disliked_jobs",
            joinColumns = {@JoinColumn(name = "disliked_jobs_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)}
    )

    private List<User> users;


    public DislikedJob(String reedId) {
        this.reedId = reedId;
        this.users = new ArrayList<User>();
    }

    public DislikedJob() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }


}
