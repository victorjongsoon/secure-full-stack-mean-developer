import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { EditProvidersComponent } from './edit-providers/edit-providers.component';
import { DetailsProvidersComponent } from './details-providers/details-providers.component';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';


@NgModule({
    declarations: [
        ProvidersComponent, AddProvidersComponent, 
        EditProvidersComponent, DetailsProvidersComponent, 
        DeleteProvidersComponent], // Components, Pipes, Directives
    imports: [RouterModule, CommonModule, ReactiveFormsModule],  // Modules needed to run this module
    exports: [
        ProvidersComponent, AddProvidersComponent, 
        EditProvidersComponent, DetailsProvidersComponent, 
        DeleteProvidersComponent], // items from declarations and imports
    providers: [], // Services
    })

export class ProvidersModule {}

