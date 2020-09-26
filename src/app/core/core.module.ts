import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomErrorHandler } from './handleErrors/customHandleErrors';
import { MaterialModule } from '@material/material.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [{provide: ErrorHandler, useClass: CustomErrorHandler}]
})
export class CoreModule { }
