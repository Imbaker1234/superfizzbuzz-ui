import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../quote.service';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {

  constructor(public quoteService: QuoteService) { }

  ngOnInit() {
  }

}
