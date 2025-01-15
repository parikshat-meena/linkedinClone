import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SquarePipe } from '../../pipes/square.pipe';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, SquarePipe, RouterModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  firstName = 'Mansi';
  date = '12/10/2024';

  str = 'parikshat';
  s = 'parik';

  constructor(private route: ActivatedRoute) {}

  checkSubstring() {
    console.log(this.str.includes(this.str), 'checking');
  }

  userId: string | null = '';
  name: string | null = '';
  role: string | null = '';

  ngOnInit() {
    this.checkSubstring();

    // this.route.params.subscribe((params) => {
    //   this.userId = params['id'];
    //   console.log('User ID:', this.userId);
    // });
    // let ProjectId: number = 0;
    // if (this.actRoute.snapshot.queryParams['ProjetId']) {
    //   ProjectId = JSON.parse(this.actRoute.snapshot.queryParams['ProjetId']);
    // }

    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
    });

    // Capture query parameters
    this.route.queryParamMap.subscribe((queryParams) => {
      this.name = queryParams.get('name');
      this.role = queryParams.get('role');
      console.log(queryParams.get('name'), queryParams.get('role'));
    });
    // console.log(this.actRoute.snapshot.queryParams['ProjetId'], 'project id');
  }

  greetingFunction() {
    console.log('Greeting from pipe component');
  }
}
