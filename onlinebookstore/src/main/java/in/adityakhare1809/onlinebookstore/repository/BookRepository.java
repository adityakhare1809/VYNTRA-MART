package in.adityakhare1809.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.adityakhare1809.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
