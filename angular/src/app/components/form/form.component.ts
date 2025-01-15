import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  // fetching route id in the component with help of dependency injection
  // dependency injection
  constructor(private route: ActivatedRoute) {}

  showValue() {
    this.route.params.subscribe((p) => {
      // accessing route params
      console.log(p['id']);
    });

    this.route.queryParamMap.subscribe((ele) => {
      console.log(ele.get('fname'), 'fname from query');
      console.log(ele.get('role'), 'role from query');
    });
  }
}
