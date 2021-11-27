/*********************************************************************************
 *  WEB422 – Assignment 05
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
 *  assignment has been copied manually or electronically from any other source (including web sites) or
 *  distributed to other students.
 *
 *  Name: Kian Dadkhah Shokrollahi Student ID: 119369205 Date: 2021-11-07
 *
 ********************************************************************************/

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchQuery } from './models/SearchQuery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web422-a';

  searchQuery: SearchQuery = {} as SearchQuery;

  constructor(private router: Router) {}

  handleSearch(): any {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchQuery.searchString },
    });
  }
}
