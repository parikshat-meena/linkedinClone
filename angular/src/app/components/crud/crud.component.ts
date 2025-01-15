import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  MinValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import { OrderPipe } from '../../pipes/order.pipe';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchFilterPipe,
    OrderPipe,
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  userData: any[] = [];
  searchText = '';
  currentUser: { id?: string; fname: string; role: string } = {
    fname: '',
    role: '',
  };
  isAsc = true;
  constructor(private userService: UserDataService) {}

  orderDataFunc() {
    this.isAsc = !this.isAsc;
  }
  fetchData() {
    this.userService.fetchUserData().subscribe((res) => {
      this.userData = res;
      console.log(res, 'res in fetch data');
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  saveData() {
    if (this.currentUser?.id) {
      this.userService
        .updateUserData(this.currentUser, this.currentUser.id)
        .subscribe((res) => {
          this.fetchData();
          this.resetForm();
        });
    } else {
      this.userService.insertData(this.currentUser).subscribe((res) => {
        console.log('data inserted successfully');
        this.fetchData();
        this.resetForm();
      });
    }
  }

  updateData(userData: any) {
    this.currentUser.fname = userData.fname;
    this.currentUser.role = userData.role;
    this.currentUser.id = userData.id;
    // this.userService.updateUserData(this.currentUser, id).subscribe((res) => {
    //   this.fetchData();
    //   this.resetForm();
    // });
  }

  deleteUser(id: string) {
    this.userService.deleteUserData(id).subscribe((res) => {
      this.fetchData();
    });
  }

  resetForm() {
    this.currentUser = {
      fname: '',
      role: '',
    };
  }
}
