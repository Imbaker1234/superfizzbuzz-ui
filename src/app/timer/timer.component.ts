import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

}
