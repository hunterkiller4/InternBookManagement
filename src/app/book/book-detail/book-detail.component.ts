import { Component, OnInit, NgZone } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UpdateBookSuccess } from 'src/app/store/actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  BooksList: any = [];
  bookUpdateForm: FormGroup;

  ngOnInit() {
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public bookService: BookService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private store: Store<AppState>
  ) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe((book) => {
      this.bookUpdateForm = this.fb.group({
        bookId: [book.id],
        bookName: [book.name],
        bookDesc: [book.description],
        bookimgURL: [book.imageURL],
        bookPrice: [book.price],
        bookAuthor: [book.author],
        bookPublicDate: [book.publicDate],
        bookCreatedDate: [book.createdDate]
      });
    });
  }

  updateForm() {
    this.bookUpdateForm = this.fb.group({
      id: 0,
      name: '',
      description: '',
      imageURL: '',
      price: 0,
      author: '',
      publicDate: Date.now(),
      createdDate: Date.now()
    });
  }

  onSubmit() {
    this.store.dispatch(new UpdateBookSuccess(this.bookUpdateForm.value));
    }
  }
