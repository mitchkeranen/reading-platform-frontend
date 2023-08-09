import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadListComponent } from './read-list/read-list.component';
import { ToBeReadComponent } from './to-be-read/to-be-read.component';
import { GoalTrackingComponent } from './goal-tracking/goal-tracking.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadListComponent,
    ToBeReadComponent,
    GoalTrackingComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
