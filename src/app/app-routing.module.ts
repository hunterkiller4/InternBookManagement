import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BookComponent } from "./book/book.component";
import { BookStartComponent } from "./book/book-start/book-start.component";
import { BookDetailComponent } from "./book/book-detail/book-detail.component";
import { BookEditComponent } from "./book/book-edit/book-edit.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "book",
    component: BookComponent,
    children: [
      { path: "", component: BookStartComponent },
      { path: "new", component: BookEditComponent },
      { path: ":id", component: BookDetailComponent },
      { path: ":id/edit", component: BookEditComponent }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
