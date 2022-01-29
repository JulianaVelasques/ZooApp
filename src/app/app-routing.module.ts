import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddAnimalComponent } from './views/add-animal/add-animal.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: 'add-animal',
    //     component: AddAnimalComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
