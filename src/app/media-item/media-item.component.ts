import { Component, Input } from '@angular/core';
import { mediaItemDeclaration } from '../types/typeDeclarations';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent
{
@Input() mediaItem: mediaItemDeclaration | null = null;

// This is how to initialize a constructor to get information from an array. [] has to be used as there are more than one line of information.
constructor(){
}

  onDelete(){
console.log("delete");
  }
}
