import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  backgroundColor = 'white';

  constructor() { }

  public randomizeColor() {
    const colors = ['blueviolet', 'chartreuse', 'darkblue', 'darkmagenta', 'hotpink', 'red', 'blue', 'green',
      'orange', 'yellow', 'purple', 'pink', 'tomato', 'MediumSeaGreen', 'SlateBlue', 'Violet', 'Black'];

    this.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }

}
