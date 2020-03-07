package com.codeclan.example.JobSwipe.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "savedjobs")
public class SavedJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String company;

    @Column
    private String title;

    @Column
    private Integer salary;

    @Column
    private Integer salary_weight;

    @Column
    private String description;

    @JsonIgnoreProperties("savedJobs")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "users_jobs",
            joinColumns = {@JoinColumn(name = "savedjob_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="user_id", nullable = false, updatable = false)}
    )

    private List<User> users;




    public SavedJob(String company, String title, Integer salary, Integer salary_weight, String description) {
        this.company = company;
        this.title = title;
        this.salary = salary;
        this.salary_weight = salary_weight;
        this.description = description;
        this.users = new ArrayList<User>();
    }

    public void addUser(User user){
        this.users.add(user);
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public SavedJob() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
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


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
