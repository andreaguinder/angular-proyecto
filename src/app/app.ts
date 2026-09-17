import { Component, signal } from '@angular/core';
import { Home } from "./pages/home/home";
import { Registro } from './components/registro/registro';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Home, Registro],
})
export class App {
  protected readonly title = signal('angular-proyecto');
}
