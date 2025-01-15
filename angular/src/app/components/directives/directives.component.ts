import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColordirectiveDirective } from '../../directive/colordirective.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule, ColordirectiveDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  value = input.required<number>();
  valueStr = input.required<string>();
  @Output() emitvalue = new EventEmitter();

  firstName = 'akash';
  showValue = true;
  player: string[] = ['rohit', 'virat', 'dhoni', 'sachin'];
  objArr = [
    { fname: 'mansi', role: 'mean developer' },
    { fname: 'akash', role: 'react developer' },
    { fname: 'pratiksha', role: 'mern developer' },
    { fname: 'smrutika', role: 'node developer' },
  ];
  playerName = 'sachin';

  myClass = {
    heading: this.showValue,
    title: this.showValue,
  };
  disableClass = {
    disableText: !this.showValue,
  };

  myActiveStyle = {
    color: 'yellow',
  };

  mydisabledStyle = {
    color: this.showValue ? 'green' : 'orange',
  };

  changeColor() {
    console.log(this.showValue, 'toggle');
    this.showValue = !this.showValue;
  }
  onTextChange() {
    console.log(this.playerName, 'player name');
    console.log(this.firstName, 'first name');
  }

  onEmit() {
    this.emitvalue.emit(10);
  }
}
