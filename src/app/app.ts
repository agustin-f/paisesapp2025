import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Footer } from './shared/components/footer/footer';
import { TopMenu } from './country/components/top-menu/top-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, TopMenu],
=======
import { Footer } from './country/shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer],
>>>>>>> 31a2ae41d6cfbb445de99d5245a6828761befe1c
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('country-app');
}
