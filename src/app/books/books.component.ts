import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: ApolloQueryObservable<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.books = this.apollo.use('books').watchQuery<any>({
      query: gql`
        query allBooks {
          allBooks {
            id
            title
          }
        }
      `
    });
  }

}
