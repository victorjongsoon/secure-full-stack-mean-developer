import { Component } from '@angular/core';
import { providers } from '../models/providers.data';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {

  providers = providers;

  constructor() {}

  ngOnInit() {
  }
}
