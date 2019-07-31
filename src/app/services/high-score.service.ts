import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HighScorePartial} from '../classes/high-score-partial';
import {HighScore} from '../classes/high-score';

@Injectable({
  providedIn: 'root'
})
export class HighScoreService {

  highScoreEntries: any;

  constructor(private http: HttpClient) { }

  getAll(): HighScore[] {
    this.http.get('/highscores')
      .subscribe( results => {
        this.highScoreEntries = results;
        return results;
      });
    return null;
  }

  save(highscore: HighScorePartial) {
    this.http.post('/highscores/save', HighScore)
      .subscribe( newHighScore => {
        return newHighScore;
      });
  }
}
