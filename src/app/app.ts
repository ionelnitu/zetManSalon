import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Find } from './find/find';
import { Owner } from './owner/owner';
import { Accomplishments } from './accomplishments/accomplishments';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true, // 🔥 probabil ai deja sau trebuie pus
  imports: [Navbar,Hero,About, Find, Owner,Accomplishments,Footer], // 🔥 AICI
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('salon');
}
