import { Component, signal } from '@angular/core';
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Home],
})
export class App {
  protected readonly title = signal('angular-proyecto');
}
