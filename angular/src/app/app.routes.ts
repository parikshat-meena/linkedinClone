import { Routes } from "@angular/router";
import { ParentComponent } from "./components/parent/parent.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { ChildComponent } from "./components/child/child.component";
import { FormComponent } from "./components/form/form.component";
import { TemplateFormComponent } from "./components/template-form/template-form.component";
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { ViewChildComponent } from "./components/view-child/view-child.component";
import { UserComponent } from "./components/user/user.component";
import { CrudComponent } from "./components/crud/crud.component";
import { authGuard } from "./guards/auth.guard";
import { ChartComponent } from "./components/chart/chart.component";
import { ImageuploadComponent } from "./components/imageupload/imageupload.component";

// routing is used to navigate to different components within the single page application by adding route in browser link
export const routes: Routes = [
  { path: "", component: LoginComponent }, // default routing
  { path: "home", component: HomeComponent, canActivate: [authGuard] }, // named routing
  {
    path: "directive",
    component: DirectivesComponent,
    canActivate: [authGuard],
  }, // named routing
  { path: "parent", component: ParentComponent, canActivate: [authGuard] },
  { path: "child", component: ChildComponent, canActivate: [authGuard] },
  //   { path: 'pipe', component: PipeComponent },
  { path: "pipe", redirectTo: "child" }, // redirect routing
  //   {
  //     path: 'form',
  //     component: FormComponent,
  //     children: [
  //       {
  //         path: 'template',
  //         component: TemplateFormComponent,
  //       },
  //       {
  //         path: 'reactive',
  //         component: ReactiveFormComponent,
  //       },
  //     ],
  //   }, // child routing

  {
    path: "form/:id",
    component: FormComponent,
    children: [
      {
        path: "utdf",
        component: TemplateFormComponent,
      },
      {
        path: "rtf",
        component: ReactiveFormComponent,
      },
    ],
    canActivate: [authGuard],
  }, // parameterized routing
  {
    path: "viewChild",
    component: ViewChildComponent,
    canActivate: [authGuard],
  },
  { path: "user", component: UserComponent, canActivate: [authGuard] },
  { path: "crud", component: CrudComponent, canActivate: [authGuard] },
  { path: "image", component: ImageuploadComponent },
  {
    path: "chart",
    loadComponent: () =>
      import("./components/chart/chart.component").then(
        (m) => m.ChartComponent
      ),
  },
  {
    path: "pagination",
    // component: PaginationComponent,
    loadComponent: () =>
      import("./components/pagination/pagination.component").then(
        (m) => m.PaginationComponent
      ), // lazy loading for component
  },
  {
    path: "customModule",
    loadChildren: () => import("./crud/crud.module").then((m) => m.CrudModule), // lazy loading for module
  },
  { path: "**", component: PagenotfoundComponent }, // wild routing
];
