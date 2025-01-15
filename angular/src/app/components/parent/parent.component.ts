import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  userName = 'xyz ';
  arr = [1, 2, 4];
  value = '';
  inputValue = '';
  subjectName = '';
  sendValue() {
    this.value = this.inputValue;
  }

  receiveValueFromChild(text: string) {
    console.log(text, 'text from child');
    this.subjectName = text;
  }
}
