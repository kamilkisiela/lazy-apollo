import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: ApolloQueryObservable<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.movies = this.apollo.use('movies').watchQuery<any>({
      query: gql`
        query allMovies {
          allMovies {
            id
            title
          }
        }
      `
    });
  }

}
