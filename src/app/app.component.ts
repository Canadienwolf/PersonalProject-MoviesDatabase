import { Component } from '@angular/core';
import { mediaItemDeclaration } from './types/typeDeclarations';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  firstMediaItem: mediaItemDeclaration | null = {
    id: 1,
    name: 'Firebug',
    medium: 'Series',
    category: { productName: 'Science Fiction' },
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  };
}
