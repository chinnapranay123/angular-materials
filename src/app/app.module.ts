import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import {MatTreeModule} from '@angular/material/tree';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule} from '@angular/material/card';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProgressnipperComponent } from './progressnipper/progressnipper.component';
import { BadgeComponent } from './badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import { DraganddropComponent } from './draganddrop/draganddrop.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { ReactiveFormsModule } from '@angular/forms';
import { SampleModule } from './sample/sample.module';
import { FormfieldComponent } from './formfield/formfield.component';
import { TablesModule } from './tables/tables.module';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TabsComponent,
    ProgressbarComponent,
    ProgressnipperComponent,
    BadgeComponent,
    DraganddropComponent,
    FormfieldComponent,

  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTreeModule,
    MatTabsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    SampleModule,
    TablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
