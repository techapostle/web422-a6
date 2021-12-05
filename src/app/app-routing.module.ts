import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { AlbumComponent } from './views/album/album.component';
import { ArtistDiscographyComponent } from './views/artist-discography/artist-discography.component';
import { FavouritesComponent } from './views/favourites/favourites.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SearchResultComponent } from './views/search-result/search-result.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';

// TODO: Make sure routes are properly working before implementing ass5: done \/

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'artist/:id', component: ArtistDiscographyComponent },
  { path: 'newReleases', component: NewReleasesComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/newReleases', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
