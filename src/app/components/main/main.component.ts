import {Component, OnInit, ViewChild} from '@angular/core';
import {ThemeService} from '../../services/theme.service';
import {MatRipple} from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

}
