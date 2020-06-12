import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { BookDetailsComponent } from './components/book-details/book-details.component';

import { SearchComponent } from './components/search/search.component';

const routes:Routes =[
  {path :'books', component: BookListComponent},

  {path :'books/:id', component: BookDetailsComponent},

  {path :'search/:keyword', component: BookListComponent},

  {path :'category/:id', component: BookListComponent},
  {path :'', redirectTo: '/books', pathMatch:'full'},
  {path : '**' , component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent,

    BookDetailsComponent,
        SearchComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
