import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
// import { provideClient } from './apollo';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    // ApolloModule.forRoot(provideClient),
    ApolloModule,
  ],
  declarations: [BooksComponent]
})
export class BooksModule { }
