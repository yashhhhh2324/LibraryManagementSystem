package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Book{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long Id;

    private String author;
    private String title;

    public Book(){}

    public Book(long Id, String author, String title){
        this.Id = Id;
        this.author=author;
        this.title=title;
    }

    public long getId(){
        return Id;
    }
    public void setId(long Id){
        this.Id=Id;
    }

    public String getTitle(){
        return title;
    }
    public void setTitle(String title){
        this.title = title;
    }

    public String getAuthor(){
        return author;
    }
    public void setAuthor(String author){
        this.author=author;
    }













}
