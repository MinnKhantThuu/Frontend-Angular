import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { AdminGalleryComponent } from '../admin/admin-gallery/admin-gallery.component';
import { GalleryCreateComponent } from '../admin/gallery-create/gallery-create.component';
import { PostCreateComponent } from '../admin/post-create/post-create.component';
import { AdminPostComponent } from '../admin/admin-post/admin-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  {
    path: 'auth', component: AuthComponent, children:[
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path:'admin',component:AdminComponent ,children : [
      {path:'' , component : AdminHomeComponent},
      {path:'gallery' ,component:AdminGalleryComponent},
      {path:'gallery/create',component:GalleryCreateComponent},
      {path:'post/create',component:PostCreateComponent},
      {path:'post/all',component:AdminPostComponent}
    ]
  }
]
export const appRoutes = RouterModule.forRoot(routes);
