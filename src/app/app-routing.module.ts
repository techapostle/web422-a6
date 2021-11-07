import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './views/about/about.component';
import { AlbumComponent } from './views/album/album.component';
import { ArtistDiscographyComponent } from './views/artist-discography/artist-discography.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'artist', component: ArtistDiscographyComponent },
  { path: 'newReleases', component: NewReleasesComponent },
  { path: 'notFound', component: NotFoundComponent },
  { path: '', component: NewReleasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
