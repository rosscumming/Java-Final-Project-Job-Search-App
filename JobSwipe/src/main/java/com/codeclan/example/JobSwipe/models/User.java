package com.codeclan.example.JobSwipe.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private Integer salary;

    @Column
    private Integer salary_weight;

    @Column
    private String location;

    @JsonIgnoreProperties("users")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_jobs",
            joinColumns = {@JoinColumn(name = "user_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="savedjob_id", nullable = false, updatable = false)}
    )

    private List<SavedJob> savedJobs;


    public User (String name, Integer salary, Integer salary_weight, String location){
        this.name = name;
        this.salary = salary;
        this.salary_weight = salary_weight;
        this.location = location;
        this.savedJobs = new ArrayList<SavedJob>();
    }

    public void addSavedJob(SavedJob job){
        this.savedJobs.add(job);
    }


    public User () {
    }

    public List<SavedJob> getSavedJobs() {
        return savedJobs;
    }

    public void setSavedJobs(List<SavedJob> savedJobs) {
        this.savedJobs = savedJobs;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }


    public Integer getSalary_weight() {
        return salary_weight;
    }

    public void setSalary_weight(Integer salary_weight) {
        this.salary_weight = salary_weight;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int savedJobCount() {
        return savedJobs.size();
    }
}
