import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CustomErrorHandler } from './handleErrors/customHandleErrors';




@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationBarComponent],
  providers: [{provide: ErrorHandler, useClass: CustomErrorHandler}]
})
export class CoreModule { }
