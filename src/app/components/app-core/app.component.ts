import {Component, HostListener} from '@angular/core';
import {KeyboardListenerService} from '../../services/keyboard-listener.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public kls: KeyboardListenerService) {
  }

  @HostListener('window:click', ['$event'])
  clickEvent(event: KeyboardEvent) {
    console.log('===CLICK EVENT===');
    console.log(event);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event.key);
    this.kls.react(event.key);
  }

}
