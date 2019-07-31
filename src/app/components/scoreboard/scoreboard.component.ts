import { Component, OnInit } from '@angular/core';
import {HighScoreService} from '../../services/high-score.service';
import {HighScore} from '../../classes/high-score';
import {ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor(private highScoreService: HighScoreService, private themeService: ThemeService) { }

  ngOnInit() {
    this.highScoreService.getAll();
  }

}
