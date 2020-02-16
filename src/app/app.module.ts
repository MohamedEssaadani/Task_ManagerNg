import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { NewTaskComponent } from './components/task-manager/new-task/new-task.component';
import { TasksListComponent } from './components/task-manager/tasks-list/tasks-list.component';
import { TaskItemComponent } from './components/task-manager/tasks-list/task-item/task-item.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TaskManagerComponent,
    NewTaskComponent,
    TasksListComponent,
    TaskItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
