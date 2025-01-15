import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  //@Input is used to send data from parent to child
  @Input() fname: number[] = [];
  @Input() str: string = '';
  newInput = input();
  lastName = '';

  showValue = false;

  myClass = {
    title: true,
    disableText: !this.showValue,
  };

  //@Output is used to send data from child to parent
  @Output() sendChildValue = new EventEmitter();

  sendDataToParent() {
    this.sendChildValue.emit('mern mean');
  }
}
