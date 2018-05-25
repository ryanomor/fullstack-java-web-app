package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {

}