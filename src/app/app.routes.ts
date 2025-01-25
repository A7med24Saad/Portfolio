import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ensure the correct path to your HomeComponent

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: '**', redirectTo: '' }          // Wildcard route to redirect to Home if no match is found
];
