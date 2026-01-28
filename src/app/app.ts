import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/components/footer/footer';
import { TopMenu } from './country/components/top-menu/top-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, TopMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('country-app');
}
