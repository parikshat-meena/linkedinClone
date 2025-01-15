import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginUserDataService } from '../../services/login-user-data.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  currentPage1 = 1;
  data = [
    { username: 'john_doe', email: 'john.doe@example.com' },
    { username: 'jane_smith', email: 'jane.smith@example.com' },
    { username: 'alex_jones', email: 'alex.jones@example.com' },
    { username: 'lisa_brown', email: 'lisa.brown@example.com' },
    { username: 'michael_white', email: 'michael.white@example.com' },
    { username: 'sarah_clark', email: 'sarah.clark@example.com' },
    { username: 'daniel_adams', email: 'daniel.adams@example.com' },
    { username: 'emma_hill', email: 'emma.hill@example.com' },
    { username: 'chris_lee', email: 'chris.lee@example.com' },
    { username: 'olivia_turner', email: 'olivia.turner@example.com' },
    { username: 'joshua_hall', email: 'joshua.hall@example.com' },
    { username: 'megan_scott', email: 'megan.scott@example.com' },
    { username: 'ryan_green', email: 'ryan.green@example.com' },
    { username: 'amy_wright', email: 'amy.wright@example.com' },
    { username: 'david_king', email: 'david.king@example.com' },
  ];

  constructor(
    private router: Router,
    private loginUserDataService: LoginUserDataService,
    private globalservice: GlobalService
  ) {}

  ngOnInit() {
    this.getDataFromGlobal();
  }

  setData() {
    const user = {
      username: 'david_king',
      email: 'david.king@example.com',
      id: 'ed382',
    };
    this.loginUserDataService.saveLoginUser(user);
    alert(`${user.username} logged in  successfully`);
    //navigate to home component
    this.router.navigate(['/pipe']);
  }

  getDataFromGlobal() {
    this.globalservice.fetchUserData('attendance').subscribe((res) => {
      console.log(res, 'res in global services');
    });
  }

  updateDataFromGlobal() {
    this.globalservice.updateUserData('user', this.data[0], '1');
  }
}
