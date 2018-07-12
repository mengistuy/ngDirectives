import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unordered-list-component',
  templateUrl: './unordered-list-component.component.html',
  styleUrls: ['./unordered-list-component.component.css']
})
export class UnorderedListComponentComponent {
  items: string[];
  constructor() {
    this.items = ['item1', 'item2', 'item3'];
   }

  // ngOnInit() {
  // }

}
