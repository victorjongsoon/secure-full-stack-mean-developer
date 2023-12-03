import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ProviderClass } from '../models/provider.class';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.css'
})
export class ProvidersComponent {

  providers: ProviderClass[] = []; // Initialize as an empty array

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.providerService.getAllProviders().subscribe((data: ProviderClass[]) => {
      this.providers = data;
    }, (error) => {
      console.log(error);
    });
  }
}
