import { Component, OnInit } from '@angular/core';
import {HighScoreService} from '../../services/high-score.service';
import {HighScore} from '../../classes/high-score';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  highScoreEntries: HighScore[];

  constructor(private highScoreService: HighScoreService) { }

  ngOnInit() {
    this.highScoreEntries = this.highScoreService.getAll();
  }

}
