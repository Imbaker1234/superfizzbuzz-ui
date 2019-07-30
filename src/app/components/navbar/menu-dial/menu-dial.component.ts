import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-dial',
  templateUrl: './menu-dial.component.html',
  styleUrls: ['./menu-dial.component.scss']
})
export class MenuDialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reRoute(endpoint) {
    this.router.navigateByUrl(endpoint);
  }

}
