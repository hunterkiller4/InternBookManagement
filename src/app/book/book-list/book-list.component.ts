import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

  bookList: any = [];


  ngOnInit() {
    this.loadList();
  }

  constructor(
    public bookService: BookService,
    private ngZone: NgZone,
    private router: Router,
  ) { }

   // Issues list
   loadList() {
    return this.bookService.getBooks().subscribe((books: {}) => {
      this.bookList = books;
    });
  }

    // Delete issue
    deleteBook(book) {
      const index = this.bookList.map((x: { name: any; }) => x.name).indexOf(book.name);
      return this.bookService.deleteBook(book.id).subscribe(() => {
        this.bookList.splice(index, 1);
       });
    }

  onNewbook() {
    this.ngZone.run(() => this.router.navigateByUrl('/book/new'));
  }
}
