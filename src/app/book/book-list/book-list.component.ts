import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { GetBooks } from 'src/app/store/actions';
import { getBooks } from 'src/app/store/selectors/book.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: any = [];
  bookstore: any;
  bookList$: Observable<any>;

  constructor(
    public bookService: BookService,
    private ngZone: NgZone,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.loadList();
    this.store.dispatch(new GetBooks());
    // this.store.pipe(select(getBooks)).subscribe(
    //   val => {
    //     this.bookList = val;
    //     console.log(this.bookList);
    // }
    // );
    this.bookList$ = this.store.select(getBooks);
    console.log(this.bookList$);
  }


   // Issues list
   loadList() {
    return this.bookService.getBooks().subscribe((books: {}) => {
      this.bookList = books;
    });
  }

  // Delete issue
  deleteBook(book) {
    const index = this.bookList
      .map((x: { name: any }) => x.name)
      .indexOf(book.name);
    return this.bookService.deleteBook(book.id).subscribe(() => {
      this.bookList.splice(index, 1);
    });
  }

  onNewbook() {
    this.ngZone.run(() => this.router.navigateByUrl('/book/new'));
  }
}
