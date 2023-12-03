// details-providers.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from '../../services/provider.service';
import { ProviderClass } from '../../models/provider.class';

@Component({
  selector: 'app-details-providers',
  templateUrl: './details-providers.component.html',
  styleUrls: ['./details-providers.component.css']
})
export class DetailsProvidersComponent implements OnInit {
  id: number = 0;
  company: any; // Define the type based on your provider data structure
  providers: ProviderClass[] = []; // Initialize as an empty array
  provider = new ProviderClass();
  
  constructor(private route: ActivatedRoute, private providerService: ProviderService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.loadProviderDetails();
    });
  }

  loadProviderDetails() {
    this.loadData();
    this.providerService.getProvider(this.id).subscribe(
      (data: any) => {
        this.provider = data[0];
      },
      (error: any) => console.log(error)
    );
  }

  loadData() {
    this.providerService.getAllProviders().subscribe((data: ProviderClass[]) => {
      this.providers = data;
    }, (error) => {
      console.log(error);
    });
  }
}
