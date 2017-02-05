import 'rxjs/add/operator/map';

import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  article: ApolloQueryObservable<any>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.article = this.apollo.watchQuery<any>({
      query: gql`
        query allArticles {
          allArticles {
            id
            text
          }
        }
      `
    })
      .map(result => result.data.allArticles[0]) as ApolloQueryObservable<any>;
  }

}
