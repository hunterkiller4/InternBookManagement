import { Component, OnInit, NgZone } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})

export class BookDetailComponent implements OnInit {
  IssuesList: any = [];
  bookUpdateForm: FormGroup;

  ngOnInit() {
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public bookService: BookService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe((book) => {
      this.bookUpdateForm = this.fb.group({
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
      bookName: '',
      bookDesc: '',
      bookimgURL: '',
      bookPrice: 0,
      bookAuthor: '',
      bookPublicDate: Date.now(),
      bookCreatedDate: Date.now() - 1
    });
  }

  onSubmit() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.bookService.updateBook(id, this.bookUpdateForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/book'));
    });
  }
}
