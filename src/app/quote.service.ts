import {Injectable} from '@angular/core';
import {Subscription, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotes = [
    { quoteBody: `"Better by far you should forget and smile
      Than that you should remember and be sad."`,
      quoteSign: 'Christina Rossetti'},

    { quoteBody: `"Can I see another's woe,
      And not be in sorrow too?
      Can I see another's grief,
      And not seek for kind relief?"`,
      quoteSign: `William Blake` },

    { quoteBody: `"Do not stand at my grave and cry;
      I am not there. I did not die."
   `, quoteSign: `Mary Elizabeth Frye`},

    { quoteBody: `"Don't hate the player hate the game."`,
      quoteSign: `Ice T`},

    { quoteBody: `"In the end… We only regret the chances we didn’t take"`,
      quoteSign: `Lewis Carroll`},

    { quoteBody: `“The point is there ain't no point.”`,
      quoteSign: `Cormac McCarthy, No Country for Old Men`},

    { quoteBody: `"The soul would have no rainbow
      Had the eyes no tears."`,
      quoteSign: `John Vance Cheney`},

    { quoteBody: `""Of all sad words of tongue or pen, the saddest are these, 'It might have been."`,
      quoteSign: `John Greenleaf Whittier`},

    { quoteBody: `"Look upon my works ye mighty, and despair."`,
      quoteSign: `Ozymandias, King of Kings`},


    { quoteBody: `"This thing we call "failure" is not the falling down, but the staying down.”`,
      quoteSign: `Mary Pickford`},

    { quoteBody: `“Life ... is a tale
      Told by an idiot, full of sound and fury,
      Signifying nothing.”`,
      quoteSign: `William Shakespeare, Macbeth`},

    { quoteBody: `“The hardest thing of all is to find a black cat in a dark room, especially if there is no cat.”`,
      quoteSign: `Confucius`},

    { quoteBody: `Helen Keller, at age 2, became deaf and blind.
      She was the first of with these disadvantages to earn a Bachelor of Arts degree.
      All of this, and you are struggling to learn your times tables.`,
      quoteSign: `Ian Baker`},

    { quoteBody: `Taste the bittersweet tanggggg of your inevitable defeat.`,
      quoteSign: `Ian Baker`},

{ quoteBody: `"An orange is a sweet juicy fruit locked inside a bitter peel. That's not how I feel about a challenge.
    I only want the bitterness, its coffee, its grapefruit, its licorice."`, quoteSign: `Bennett Foddy`}
  ];

  public countdown$: Subscription;

  constructor() {
  }

  randomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
