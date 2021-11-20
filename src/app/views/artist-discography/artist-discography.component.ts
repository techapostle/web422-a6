import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css'],
})
export class ArtistDiscographyComponent implements OnInit, OnDestroy {
  id: any;
  albums: any;
  artist: any;
  private albumsSub: any;
  private artistSub: any;

  constructor(private route: ActivatedRoute, private data: MusicDataService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.artistSub = this.data
      .getArtistById(this.id)
      .subscribe((res) => (this.artist = res));
    this.albumsSub = this.data
      .getAlbumsByArtistId(this.id)
      .subscribe((res) => (this.albums = res));
  }

  ngOnDestroy(): void {
    this.albumsSub.unsubscribe();
    this.artistSub.unsubscribe();
  }
}
