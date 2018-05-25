package com.example.springbootmonolith.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "Task")
public class Task {
    /*
    public Song(String title, String length, String artist) {
        this.title = title;
        this.length = length;
        this.artist = artist;
    }
    */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long user_id;

    @Column(name = "TASK")
    private String task;

    @Column(name = "COMPLETED")
    private int completed;

}