// Create a module to export all components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion/accordion.component';
import { RootPageComponent } from './root-page/root-page.component';

@NgModule({
  declarations: [AccordionComponent, RootPageComponent],
  imports: [CommonModule],
  exports: [AccordionComponent]
})
export class ComponentsModule { }