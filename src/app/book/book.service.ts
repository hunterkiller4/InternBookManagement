import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./book.model";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BookService {
  // Base url
  baseurl = "http://5e44b0ece85a4e001492c1b1.mockapi.io/books/";

  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  // POST
  createBook(book): Observable<Book> {
    return this.http
      .post<Book>(this.baseurl, JSON.stringify(book), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  getBook(id): Observable<Book> {
    return this.http
      .get<Book>(this.baseurl + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  getBooks(): Observable<any> {
    return this.http.get<Book>(this.baseurl);
  }

  // PUT
  updateBook(id, book): Observable<Book> {
    return this.http
      .put<Book>(this.baseurl + id, JSON.stringify(book), this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  deleteBook(id) {
    return this.http
      .delete<Book>(this.baseurl + id, this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
