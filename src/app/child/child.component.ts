import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input()
  parentCount: number;

  @Output()
  value = new EventEmitter();

  private counter = 0;

  incrementValue() {
    this.counter += 1;
    this.value.emit(this.counter);
  }
}
