import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { BookStartComponent } from './book/book-start/book-start.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { BookItemComponent } from './book/book-list/book-item/book-item.component';
import { BookService } from './book/book.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    BookStartComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailComponent,
    DropdownDirective,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
