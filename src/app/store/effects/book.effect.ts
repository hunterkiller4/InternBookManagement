import { BookService } from "./../../book/book.service";
import * as BookActions from "./../actions/book.action";
import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { AppState } from "../reducers";
import { map, catchError, switchMap } from "rxjs/operators";
import { of } from "rxjs";

const { BookActionsType } = BookActions;

@Injectable()
export class BookEffects {
  constructor(
    private bookService: BookService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  @Effect()
  getBooks$ = this.actions$.ofType(BookActionsType.GET_BOOKS).pipe(
    switchMap(() => {
      return this.bookService.getBooks().pipe(
        map(res => {
          return new BookActions.GetBooksSuccess(res);
        }),
        catchError(() => of(new BookActions.GetBooksFailure()))
      );
    })
  );
}
