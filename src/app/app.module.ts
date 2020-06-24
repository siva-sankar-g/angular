import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { courseComponent } from './course.component';
import { ListComponent } from './list/list.component';
import { ContactFromComponent } from './contact-from/contact-from.component';
import { HighliteDirective } from './list/appshow.directive';
import { MyFirstPipe } from './repeat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    courseComponent,
    ListComponent,
    ContactFromComponent,
    HighliteDirective,
    MyFirstPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
