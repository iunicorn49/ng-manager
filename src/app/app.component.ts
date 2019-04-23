import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('square',
      [
        state('green', style({'background-color': 'green', height: '50px'})),
        state('red', style({'background-color': '#ff5d5d', height: '300px'})),
        transition('green => red', animate(300)),
        transition('red => green', animate(300)),
      ]
    )
  ]
})
export class AppComponent {
  squareState: string;

  darkTheme = false;

  constructor(
  private oc: OverlayContainer
  ) {

  }

  switchTheme(dark: boolean) {
    this.darkTheme = dark;
    if (dark) {
      this.oc.getContainerElement().classList.add('myapp-dark-theme');
    } else {
      this.oc.getContainerElement().classList.remove('myapp-dark-theme');
    }
  }

  onClick() {
    this.squareState =  !this.squareState ? 'red' : this.squareState  === 'red' ? 'green' : 'red';
  }
}
