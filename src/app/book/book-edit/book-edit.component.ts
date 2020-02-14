import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})

export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  bookArr: any = [];

  ngOnInit() {
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = +params.id;
    //     this.editMode = params.id != null;
    //     this.initForm();
    //   }
    // );

    this.addBooks();
  }

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public bookService: BookService
  ) { }

  addBooks() {
    this.bookForm = this.formBuilder.group({
      bookName: '',
      bookDesc: '',
      bookimgURL: '',
      bookPrice: 0,
      bookAuthor: '',
      bookPublicDate: Date.now(),
      bookCreatedDate: Date.now() - 1
    });

    // if (this.editMode) {
    //   const book = this.bookService.getBook(this.id);
    //   bookName = book.name;
    //   bookImageURL = book.imageURL;
    //   bookDescription = book.description;
    //   bookPrice = book.price;
    //   // bookAuthor = book.author;
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.createBook(this.bookForm.value).subscribe(res => {
        alert('Issue added!');
        this.ngZone.run(() => this.router.navigateByUrl('/book'));
      });
    }
  }

  onCancel() {
    this.ngZone.run(() => this.router.navigateByUrl('/book'));
  }
}
