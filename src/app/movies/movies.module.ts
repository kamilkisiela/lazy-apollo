import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApolloModule } from 'apollo-angular';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { provideClient } from './apollo';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ApolloModule.forRoot(provideClient),
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
