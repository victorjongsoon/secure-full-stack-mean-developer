import {NgModule} from '@angular/core';
import { AboutComponent } from './about.component';

@NgModule({
    declarations: [AboutComponent], // Components, Pipes, Directives
    imports: [],  // Modules needed to run this module
    exports: [AboutComponent], // items from declarations and imports
    providers: [], // Services
    })

export class AboutModule {}