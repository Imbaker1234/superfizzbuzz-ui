import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  toast(message: string, timeOut: number) {

    this.snackBar.open(message, '✔', {
      duration: timeOut
    });
  }

}
