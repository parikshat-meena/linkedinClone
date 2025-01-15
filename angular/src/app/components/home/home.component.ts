import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  user = { fname: 'akash', role: 'student' };

  navtoForm() {
    this.router.navigate(['/form', 10], {
      queryParams: this.user,
    });
  }
}
