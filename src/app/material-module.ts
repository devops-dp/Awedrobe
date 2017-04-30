import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule,
        MdToolbarModule,
        MdInputModule,
        MdSidenavModule,
        MdProgressBarModule,
        MdCardModule, MdIconModule } from '@angular/material';
@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,
            MdToolbarModule, MdInputModule,
            MdSidenavModule, MdProgressBarModule,
            MdCardModule],
  exports: [MdButtonModule, MdCheckboxModule,
            MdToolbarModule, MdInputModule,
            MdSidenavModule, MdProgressBarModule,
            MdCardModule, MdIconModule],
})
export class MaterialModuleSpec {
}
