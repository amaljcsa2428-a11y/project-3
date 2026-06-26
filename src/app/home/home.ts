import { Component } from '@angular/core';
import { Accordion } from '../accordion/accordion';

@Component({
  selector: 'app-home',
  imports: [Accordion],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
