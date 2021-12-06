/*********************************************************************************
 *  WEB422 – Assignment 06
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *  assignment has been copied manually or electronically from any other source (including web sites) or
 *  distributed to other students.
 *
 *  Name: Kian Dadkhah Shokrollahi Student ID: 119369205 Date: 2021-11-07
 *
 ********************************************************************************/

import { Component, OnInit } from '@angular/core';
import { NavigationStart, Event, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SearchQuery } from './models/SearchQuery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'web422-a';

  token: any;
  searchQuery: SearchQuery = {} as SearchQuery;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  handleSearch(): any {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchQuery.searchString },
    });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
