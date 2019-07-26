import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
import {ToastService} from '../toast.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(public gameService: GameService, public toastService: ToastService) { }

  ngOnInit() {
  }

  changeDifficulty() {
    let toastMessage: string;
    switch (this.gameService.difficulty) {
      case 'Beginner':
        toastMessage = `For those learning to FizzBuzz`;
        break;
        case 'Expert':
        toastMessage = `Looks like you've got the hang of this!`;
        break;
        case 'Competitive':
        toastMessage = `Get Ready to Flex on your Friends with your sweet High Score!`;
        break;
    }
    this.toastService.toast(toastMessage, 1500);
  }
}
