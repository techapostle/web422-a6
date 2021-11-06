import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { NewReleasesComponent } from './views/new-releases/new-releases.component';
import { AlbumComponent } from './views/album/album.component';
import { ArtistDiscographyComponent } from './views/artist-discography/artist-discography.component';

@NgModule({
  declarations: [
    AppComponent,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    FlexLayoutModule,
    AboutComponent,
    NotFoundComponent,
    NewReleasesComponent,
    AlbumComponent,
    ArtistDiscographyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
