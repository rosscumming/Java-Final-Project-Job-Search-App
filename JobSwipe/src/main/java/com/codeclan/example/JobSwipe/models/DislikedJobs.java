package com.codeclan.example.JobSwipe.models;

import javax.persistence.*;

@Entity
@Table(name = "dislikedjobs")
public class DislikedJobs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public DislikedJobs(Long id) {
        this.id = id;
    }

    public DislikedJobs() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
