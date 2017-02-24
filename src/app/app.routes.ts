import { HomeComponent } from "./home/home.component";
import { TrackingComponent } from "./tracking/tracking.component";
import { RouterModule } from "@angular/router";
const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'track/:id',
    component: TrackingComponent
  }
];

export const routing = RouterModule.forRoot(routes);
