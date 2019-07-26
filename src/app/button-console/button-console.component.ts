import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-button-console',
  templateUrl: './button-console.component.html',
  styleUrls: ['./button-console.component.scss']
})
export class ButtonConsoleComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

}
