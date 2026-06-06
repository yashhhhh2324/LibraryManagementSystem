package com.example.demo.Service;
import com.example.demo.model.Book;
import com.example.demo.Repository.BookRepo;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;



@Service
public class bookserve {

    private final BookRepo bookRepo;

    @Autowired
    public bookserve(BookRepo bookRepo){
        this.bookRepo=bookRepo;
    }

    public Book addbook(Book book){
        return bookRepo.save(book);
    }

    public void deleteBook(Long id){
        bookRepo.deleteById(id);
    }

    public List<Book> getEmAll(){
        return bookRepo.findAll();
    }

    public Book findIt(Long id){
        return bookRepo.findById(id).get();

    }

    public Book updateBook(Long id, Book bookDetail){
        Book book= bookRepo.findById(id).get();
        book.setTitle(bookDetail.getTitle());
        book.setAuthor(bookDetail.getAuthor());

        return bookRepo.save(book);
    }

}
