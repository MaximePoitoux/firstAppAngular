import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // FORM

import { AppRoutingModule } from './app-routing.module';
import { BlockApp } from './components/block.component';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { MovieComponent } from './movie/movie.component';
import { HoverDirective } from './hover.directive';
import { ShowMoviesDirective } from './show-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlockApp,
    HighlightDirective,
    DisplayGuestsDirective,
    MovieComponent,
    HoverDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

