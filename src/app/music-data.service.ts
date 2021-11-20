import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SpotifyTokenService } from './spotify-token.service';

import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MusicDataService {
  constructor(
    private spotifyToken: SpotifyTokenService,
    private http: HttpClient,
    public favouritesList: Array<any>
  ) {}

  getResources(url: any): Observable<any> {
    return this.spotifyToken.getBearerToken().pipe(
      mergeMap((token) => {
        return this.http.get<any>(`${url}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
    );
  }

  getNewReleases(): Observable<any> {
    return this.getResources('https://api.spotify.com/v1/browse/new-releases');
  }

  getArtistById(id: String): Observable<any> {
    return this.getResources(`https://api.spotify.com/v1/artists/${id}`);
  }

  getAlbumsByArtistId(id: String): Observable<any> {
    return this.getResources(`https://api.spotify.com/v1/artists/${id}/albums`);
  }

  getAlbumById(id: String): Observable<any> {
    return this.getResources(`https://api.spotify.com/v1/albums/${id}`);
  }

  searchArtists(searchString: String): Observable<any> {
    return this.getResources(
      `https://api.spotify.com/v1/search/${searchString}/artist/50`
    );
  }

  addToFavourites(id: String): Boolean {
    if (id != null && this.favouritesList.length < 50) {
      this.favouritesList.push(id.valueOf);
      return true;
    }
    return false;
  }

  removeFromFavourites(id: String) {
    this.favouritesList.splice(this.favouritesList.indexOf(id));
  }

  getFavourites(): Observable<any> {
    if (this.favouritesList.length > 0) {
      return this.getResources(
        `https://api.spotify.com/v1/tracks/${this.favouritesList.join()}`
      );
    } else {
      return new Observable((o) => {
        o.next([]);
      });
    }
  }
}
