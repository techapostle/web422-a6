import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albumData from '../data/SearchResultsAlbums.json';
import artistData from '../data/SearchResultsArtist.json';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css'],
})
export class ArtistDiscographyComponent implements OnInit {
  albums = albumData;
  artist = artistData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
