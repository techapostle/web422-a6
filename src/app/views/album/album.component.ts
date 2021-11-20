import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
})
export class AlbumComponent implements OnInit, OnDestroy {
  id: any;
  album: any;
  private albumSub: any;

  constructor(private route: ActivatedRoute, private data: MusicDataService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.albumSub = this.data
      .getAlbumById(this.id)
      .subscribe((res) => (this.album = res));
  }

  ngOnDestroy(): void {
    this.albumSub.unsubscribe();
  }
}
