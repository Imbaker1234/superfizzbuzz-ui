import { Injectable } from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor() { }

  public displayRule = {ruleHead: `FizzBuzz`,
                        ruleBody: `Strive to count as high as you can.
                                      for multiples of 3 you instead hit Fizz, for
                                       multiples of 5 hit Buzz, and if it is divisible
                                       by both you hit Fizzbuzz.`,
                        ruleSign: `It's harder than you think`};

  private rules = [
    { ruleHead: `Tip`,
      ruleBody: `You can use the number keys 1-4 to control the game.`,
      ruleSign: `Be careful. It's easy to misfire this way.` },

    { ruleHead: `Competitive Mode`,
      ruleBody: `Every number you count shaves
                  a few milliseconds off of the 2 second timer.`,
      ruleSign: `To keep things interesting.` },

    { ruleHead: `Tip`,
      ruleBody: `Some people find it easier to use a touchscreen. If
                  you're struggling check us out on your mobile device!`, ruleSign: `Because we want those sweet sweet hits.`},

    { ruleHead: `Tip`,
      ruleBody: `When starting out try pausing briefly after each Fizz and mapping out your next 3 moves.`,
      ruleSign: `"Its not Checkers its Chess!" - Training Day`},
  ];

  public countdown$: Subscription;

  cycleRules() {
    this.displayRule = this.rules[Math.floor(Math.random() * this.rules.length)];
    this.countdown$ = timer(7 * 1000).subscribe(() => {
      this.cycleRules();
    });
  }
}
