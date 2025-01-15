import { Component, Input } from '@angular/core';
import { LoginUserDataService } from '../../services/login-user-data.service';
import { AddComponent } from '../add/add.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, AddComponent, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private loginService: LoginUserDataService,
    private userService: UserDataService
  ) {}

  userName = 'parikshat';
  showValue = false;
  currentUser: any;
  param = {
    CustomerName: 'string',
    CustomerCity: 'string',
    MobileNo: 'stringstri',
    Email: 'string',
    BookingId: 0,
    CarId: 0,
    BookingDate: '2025-01-10T16:13:00.346Z',
    Discount: 0,
    TotalBillAmount: 0,
  };
  // ngOnInit() is a lifecycle hook
  // It gets called at component initialisation
  ngOnInit() {
    this.currentUser = this.loginService.getUserDetails();
    console.log(this.currentUser, 'cu');

    // this.userService.createBooking(this.param).subscribe((res) => {
    //   console.log(res);
    // });
    this.userService.getcar().subscribe((res) => {
      console.log(res);
    });
  }
  toggleValue() {
    this.showValue = !this.showValue;
  }

  fileContent: string | ArrayBuffer | null = '';

  onFileSelected(event: Event): void {
    console.log(event, 'event');
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.fileContent = reader.result; // File content as text or base64
        console.log('File content:', this.fileContent);
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsText(file); // Read as text. Use `readAsDataURL` for base64.
    }
  }
}
