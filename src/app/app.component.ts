import {Component, HostListener} from '@angular/core';
import {GameService} from './game.service';
import {KeyboardListenerService} from './keyboard-listener.service';
import {ThemeService} from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public gs: GameService, public kls: KeyboardListenerService, public themeService: ThemeService) {
  }

  @HostListener('window:click', ['$event'])
  clickEvent(event: KeyboardEvent) {
    console.log('===CLICK EVENT===');
    console.log(event);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.kls.react(event.key);
  }

}
