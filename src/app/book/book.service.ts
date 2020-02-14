import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BookService {
  bookChanged = new Subject<Book[]>();

  private books: Book[] = [
    {
      name: 'Yêu Em Từ Cái Nhìn Đầu Tiên',
      description: 'Thế giới của Yêu em từ cái nhìn đầu tiên là thế giới màu hồng dịu ngọt',
      // tslint:disable-next-line: max-line-length
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/KellsFol032vChristEnthroned.jpg/1200px-KellsFol032vChristEnthroned.jpg',
      price: 80000,
      author: 'Cố Mạn',
      publicDate: '02/2020',
      createdDate: '10/2014'
    },
{
      name: 'Bữa Trưa Tình Yêu',
      description: 'Đây là tác phẩm kể về lịch sử đấu tranh của nhân viên ',
      imageURL: 'https://salt.tikicdn.com/ts/bookpreview/6a/44/422011/files/OEBPS/Images/IMG_20171202_0020.gif',
      price: 70000,
      author: 'Cố Mạn',
      publicDate: '02/2020',
      createdDate: '01/2015'
    },
{
      name: 'Tớ Thích Cậu Hơn Cả Harvard',
      description: 'Món quà tuyệt vời nhất cho mùa hè rực rỡ !',
      imageURL: 'https://salt.tikicdn.com/cache/w1200/ts/product/fe/22/bf/310ff6668202c6c949f7e7eec39a9bc8.jpg',
      price: 65000,
      author: 'Lan Rùa',
      publicDate: '02/2020',
      createdDate: '02/2019'
    }
  ];

getBooks() {
    return this.books.slice();
  }

getBook(index: number) {
    return this.books[index];
  }

addBook(book: Book) {
    this.books.unshift(book);
    this.bookChanged.next(this.books.slice());
  }

updateBook(index: number, newbook: Book) {
    this.books[index] = newbook;
    this.bookChanged.next(this.books.slice());
  }

deleteBook(index: number) {
    this.books.splice(index, 1);
    this.bookChanged.next(this.books.slice());
  }
}
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookService {

//   private api = 'http://5e44b0ece85a4e001492c1b1.mockapi.io/';

//   constructor(private httpClient: HttpClient) { }

//   public sendGetRequest() {
//     return this.httpClient.get(this.api);
//   }
// }
