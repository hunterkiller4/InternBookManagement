import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { BookService } from 'src/app/book/book.service';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import * as BookActions from '../actions/book.actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const { BookActionsType } = BookActions;

@Injectable()
export class BookEffects {

  constructor(
    private bookService: BookService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  getBook$ = this.actions$.pipe(
    ofType(BookActionsType.GET_BOOKS),
    switchMap(() => {
      return this.bookService.getBooks().pipe(
        map(res => {
          return new BookActions.GetBooksSuccess(res);
        }),
        catchError(() => of(new BookActions.GetBooksFail()))
      );
    })
  );


}
