import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game.service';

@Component({
  selector: 'app-reverse-timer',
  templateUrl: './reverse-timer.component.html',
  styleUrls: ['./reverse-timer.component.scss']
})
export class ReverseTimerComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

}
