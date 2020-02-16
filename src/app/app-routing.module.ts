import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskDetailsComponent } from './components/task-manager/task-details/task-details.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path: 'tasks', component:TaskManagerComponent},
  {path: 'task/:id', component:TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
