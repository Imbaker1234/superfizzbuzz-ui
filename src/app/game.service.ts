import {Injectable} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {ToastService} from './toast.service';
import {ThemeService} from './theme.service';
import {QuoteService} from './quote.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public currentNumber = 1;
  timeUnitsRemaining = 100;
  correctAnswer = 'Number';
  countdown$: Subscription;
  endScore = 0;
  difficulty = 'Competitive';
  mode = 'start';
  random = 1;

  constructor(private ts: ToastService, private themeService: ThemeService, private quoteService: QuoteService) {
  }

  private countDown() {
    this.mode = 'play';
    let timeUnitLength: number;

    switch (this.difficulty) {
      case 'Beginner':
        timeUnitLength = 70;
        break;
      case 'Expert':
        timeUnitLength = 40;
        break;
      case 'Competitive':
        timeUnitLength = Math.round((4000 - (this.currentNumber * 3)) / 100);
        break;
    }

    this.countdown$ = timer(timeUnitLength).subscribe(() => {
      this.timeUnitsRemaining--;
      if (this.timeUnitsRemaining <= 0) {
        this.resetGame();
      } else {
        this.countDown();
      }
    });
  }

  answerOne() {
    switch (this.random) {
      case 1:
        this.submitAnswer('Number');
        break;
      case 2:
        this.submitAnswer('Fizz');
        break;
      case 3:
        this.submitAnswer('Buzz');
        break;
      case 4:
        this.submitAnswer('FizzBuzz');
        break;
    }
  }

  answerTwo() {
    switch (this.random) {
      case 1:
        this.submitAnswer('Fizz');
        break;
      case 2:
        this.submitAnswer('Number');
        break;
      case 3:
        this.submitAnswer('FizzBuzz');
        break;
      case 4:
        this.submitAnswer('Buzz');
        break;
    }
  }

  answerThree() {
    switch (this.random) {
      case 1:
        this.submitAnswer('Buzz');
        break;
      case 2:
        this.submitAnswer('FizzBuzz');
        break;
      case 3:
        this.submitAnswer('Fizz');
        break;
      case 4:
        this.submitAnswer('Number');
        break;
    }
  }

  answerFour() {
    switch (this.random) {
      case 1:
        this.submitAnswer('FizzBuzz');
        break;
      case 2:
        this.submitAnswer('Buzz');
        break;
      case 3:
        this.submitAnswer('Number');
        break;
      case 4:
        this.submitAnswer('Fizz');
        break;
    }
  }

  submitAnswer(answer) {
    console.log('Answer Submitted: ' + answer);
    console.log('Answer Expected: ' + this.correctAnswer);
    if (this.correctAnswer === answer) {
      this.nextTurn();
    } else {
      this.resetGame();
    }
  }

  public nextTurn() {
    this.themeService.randomizeColor();
    this.currentNumber++;
    this.endScore = this.currentNumber;
    this.timeUnitsRemaining = 110;

    if (this.mode === 'start') {
      this.countDown();
      this.quoteService.randomQuote();
    }

    if (this.currentNumber % 3 === 0 && this.currentNumber % 5 !== 0) {
      this.correctAnswer = 'Fizz';
    } else if (this.currentNumber % 3 !== 0 && this.currentNumber % 5 === 0) {
      this.correctAnswer = 'Buzz';
    } else if (this.currentNumber % 3 === 0 && this.currentNumber % 5 === 0) {
      this.correctAnswer = 'FizzBuzz';
    } else {
      this.correctAnswer = 'Number';
    }
    if (this.difficulty === 'Competitive') {
      this.random = Math.floor(Math.random() * 3) + 1;
    }
    console.log('==============================');
    console.log('CORRECT ANSWER AT END OF TURN:');
    console.log(this.correctAnswer);
  }

  public resetGame() {
    this.countdown$.unsubscribe();
    this.currentNumber = 1;
    this.random = 1;
    this.correctAnswer = 'Number';
    this.mode = 'result';
    this.themeService.backgroundColor = 'white';
    const tauntMessage = this.quoteService.randomQuote();
    this.ts.toast(tauntMessage.quoteBody + ' - ' + tauntMessage.quoteSign, 7000);
  }
}
