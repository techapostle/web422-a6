import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import albumData from '../data/SearchResultsAlbum.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit {
  album = albumData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
