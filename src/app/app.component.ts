import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  parentCount = 0;

  displayCounter(count: number) {
    this.parentCount = count;
  }
}
