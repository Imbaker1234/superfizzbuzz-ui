import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game.service';
import {KeyboardListenerService} from '../../../services/keyboard-listener.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(public gameService: GameService, public keyboardListenerService: KeyboardListenerService) { }

  ngOnInit() {
  }

}
