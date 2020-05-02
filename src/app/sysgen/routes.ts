import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent }
]
export const appRoutes = RouterModule.forRoot(routes);
