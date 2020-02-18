import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { CreateBookSuccess } from 'src/app/store/actions';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  bookArr: any = [];

  ngOnInit() {
    this.addBooks();
  }

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bookService: BookService,
    private store: Store<AppState>
  ) { }

  addBooks() {
    this.bookForm = this.formBuilder.group({
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
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      this.store.dispatch(new CreateBookSuccess(this.bookForm.value));
    }
  }

  onCancel() {
    this.ngZone.run(() => this.router.navigateByUrl('/book'));
  }
}
