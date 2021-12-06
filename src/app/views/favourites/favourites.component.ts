import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit, OnDestroy {
  favourites: Array<any> = [];
  private favSub: any;

  constructor(private data: MusicDataService) {}

  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites(): void {
    this.favSub = this.data.getFavourites().subscribe({
      next: (data) => {
        this.favourites = data.tracks;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeFromFavourites(id: any): void {
    this.favSub = this.data.removeFromFavourites(id).subscribe({
      next: (data) => {
        this.favourites = data.tracks;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.favSub.unsubscribe();
  }
}
