import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  results: any;
  searchQuery: string;
  private querySub: any;
  private resultsSub: any;

  constructor(private route: ActivatedRoute, private data: MusicDataService) {
    this.searchQuery = this.route.snapshot.queryParams['q'];
  }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'];
      this.resultsSub = this.data
        .searchArtists(this.searchQuery)
        .subscribe((res) => {
          this.results = res.artists.items.filter(
            (item: any) => item.images.length > 0
          );
        });
    });
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
    this.resultsSub.unsubscribe();
  }
}
