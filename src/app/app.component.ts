import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app';
 toggleColor = 'black';
 emittedColorValue;
 myInputColor = 'black';
 public myEmittedValue(value) {
  this.emittedColorValue = value;
  console.log('testddd' + this.emittedColorValue);
 }
}
