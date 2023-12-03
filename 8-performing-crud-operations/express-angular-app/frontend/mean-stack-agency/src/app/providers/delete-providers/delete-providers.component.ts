import { Component } from '@angular/core';
import { ProviderService } from '../../services/provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-providers',
  templateUrl: './delete-providers.component.html',
  styleUrl: './delete-providers.component.css'
})
export class DeleteProvidersComponent {
  constructor(private providerService: ProviderService, private route: ActivatedRoute) {
  }

  id: number = 0;
  company: string = '';
  isDeleted = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.deleteRecord()
  }

  deleteRecord() {
    // Check if provider exists before making the delete request
    this.providerService.getProvider(this.id).subscribe(
      (data: any) => {
        if (data) {
          // Provider exists, proceed with the delete request
          this.providerService.deleteProvider(this.id).subscribe(
            (deleteData: any) => {
              console.log(deleteData);
              this.company = deleteData.company.company_name;
              this.isDeleted = true;
            },
            (deleteError: any) => console.log(deleteError)
          );
        } else {
          // Provider doesn't exist, handle accordingly (show a message, redirect, etc.)
          console.log('Provider not found');
        }
      },
      (error: any) => console.log(error)
    );
  }
  

}
