import {Injectable} from '@angular/core';
import {GameService} from './game.service';

@Injectable({
  providedIn: 'root'
})
export class KeyboardListenerService {

  constructor(private gameService: GameService) {
  }

  react(key: string) {
    console.log(key);
    switch (key) {
      case '1':
        if (this.gameService.mode !== 'result') {
          this.gameService.answerOne();
        }
        break;
      case '2':
        if (this.gameService.mode !== 'result') {
          this.gameService.answerTwo();
        }
        break;
      case '3':
        if (this.gameService.mode !== 'result') {
          this.gameService.answerThree();
        }
        break;
      case '4':
        if (this.gameService.mode !== 'result') {
          this.gameService.answerFour();
        }
        break;
      case ' ':
        if (this.gameService.mode === 'result') {
          this.gameService.mode = 'start';
        }
        break;
    }
  }
}
