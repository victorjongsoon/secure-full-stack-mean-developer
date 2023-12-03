import {NgModule} from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AboutComponent], // Components, Pipes, Directives
    imports: [RouterModule],  // Modules needed to run this module
    exports: [AboutComponent], // items from declarations and imports
    providers: [], // Services
    })

export class AboutModule {}