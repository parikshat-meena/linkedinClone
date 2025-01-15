import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Input() fname: string = '';
  @Input() showValue: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['fname'])
      console.log(this.fname, 'ngOnChanges is getting called for fname');

    if (changes?.['showValue']) {
      console.log(this.showValue, 'show value changes');
    }
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngOnDestroy() {
    console.log('ng on destroy');
  }
}
