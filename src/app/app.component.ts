import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormGroup  ,FormBuilder, FormControl,FormsModule  , Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule(
  {
    declarations: [],
    imports: [ReactiveFormsModule, FormControl, FormBuilder ,FormGroup, Validators],
    providers: [],
    exports: [FormsModule,ReactiveFormsModule],
  }
)
export class AppComponent {
  title = 'DEMOS';
}
