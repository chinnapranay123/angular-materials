import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextFieldModule} from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidetogComponent } from './sidetog/sidetog.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [

    SidetogComponent
  ],
  imports: [

  CommonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SidetogComponent
  ]
})
export class SampleModule { }
