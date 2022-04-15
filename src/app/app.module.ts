import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './recipes-app/components/main/main.component';
import { ShoppingListsOverviewComponent } from './recipes-app/components/shopping-lists-overview/shopping-lists-overview.component';
import { ShoppingListComponent } from './recipes-app/components/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShoppingListsOverviewComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
