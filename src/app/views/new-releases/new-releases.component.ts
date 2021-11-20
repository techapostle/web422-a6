import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicDataService } from '../../music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent implements OnInit, OnDestroy {
  public releases: any = [];
  private releasesSub: any;

  constructor(private data: MusicDataService) {}

  ngOnInit(): void {
    this.releasesSub = this.data.getNewReleases().subscribe((res) => {
      this.releases = res.albums;
    });
  }

  ngOnDestroy(): void {
    this.releasesSub.unsubscribe();
  }
}
