import { Component, ElementRef, ViewChild } from '@angular/core';
import { PipeComponent } from '../pipe/pipe.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [PipeComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  @ViewChild('hello') helloDiv!: ElementRef;
  @ViewChild('pipeComp') pipeComp!: PipeComponent;
  changeText() {
    this.helloDiv.nativeElement.innerText = 'Hello Angular';
    this.helloDiv.nativeElement.style.color = 'red';
  }
  callPipeFunc() {
    this.pipeComp.greetingFunction();
  }
}
