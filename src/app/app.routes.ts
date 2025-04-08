import { Routes } from '@angular/router';
import { TasksPage } from './tasks/tasks.page';

export const routes: Routes = [
  { path: 'tasks', component: TasksPage },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];
