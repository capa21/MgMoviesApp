import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private errorService: ErrorService){}

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
     console.error(`Server error: ${this.errorService.getServerMessage(error)}`);
     return;
    }
    console.error(`Client error: ${this.errorService.getClientMessage(error)}
                   Client stack errors: ${this.errorService.getClientStack(error)}
                  `);
  }
}
