import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

}
