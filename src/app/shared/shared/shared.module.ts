import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CalendarModule} from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import {PanelModule} from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import {EditorModule} from 'primeng/editor';

@NgModule({
  declarations: [    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    ProgressSpinnerModule,
    CalendarModule,
    ToastModule,
    DynamicDialogModule,
    DialogModule,
    ScrollPanelModule,
    PanelModule,
    TabViewModule,
    CheckboxModule,
    InputNumberModule,
    MultiSelectModule,
    EditorModule
  ],
  exports: [
    CardModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    ProgressSpinnerModule,
    CalendarModule,
    ToastModule,
    DynamicDialogModule,
    DialogModule,
    ScrollPanelModule,
    PanelModule,
    TabViewModule,
    CheckboxModule,
    InputNumberModule,
    MultiSelectModule,
    EditorModule
  ],
  providers: [
    DialogService,
    MessageService,
  ]
})
export class SharedModule { }
