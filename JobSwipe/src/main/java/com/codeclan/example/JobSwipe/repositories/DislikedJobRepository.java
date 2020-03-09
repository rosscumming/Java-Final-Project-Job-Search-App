package com.codeclan.example.JobSwipe.repositories;


import com.codeclan.example.JobSwipe.models.DislikedJob;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface DislikedJobRepository extends JpaRepository<DislikedJob, Long> {


}
