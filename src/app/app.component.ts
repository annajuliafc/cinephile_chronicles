import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  PRIMARY_OUTLET,
  Router,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cinephile_chronicles';

  constructor(public _router: Router) {}
}
