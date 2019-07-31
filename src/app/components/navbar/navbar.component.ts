import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  myColor: 'White';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  reRoute(endpoint: string) {
    this.router.navigateByUrl(endpoint);
  }
}
