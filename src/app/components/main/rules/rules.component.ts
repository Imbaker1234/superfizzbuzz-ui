import { Component, OnInit } from '@angular/core';
import {RuleService} from '../../../services/rule.service';
import {timer} from 'rxjs';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  constructor(public ruleService: RuleService) { }

  ngOnInit() {
    timer(12 * 1000).subscribe(() => {
    this.ruleService.cycleRules();
    });
  }

}
