import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private route: ActivatedRoute,
    private data: MusicDataService,
    private snackBar: MatSnackBar
  ) {
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

  addToFavourites(trackID: any): void {
    this.data.addToFavourites(trackID).subscribe({
      next: () => {
        this.snackBar.open('Adding to Favourites...', 'Done', {
          duration: 1500,
        });
      },
      error: () => {
        this.snackBar.open('Unable to add song to Favourites', 'Error', {
          duration: 1500,
        });
      },
    });
  }
}
