import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  formData = {
    fname: '',
    email: '',
    password: '',
  };

  isSubmitted = false;

  OnSubmit(data: any) {
    console.log(data, 'form submitted');
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
    }, 2000);
  }
}
