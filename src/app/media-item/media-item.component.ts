import { Component, Input, Output, EventEmitter } from '@angular/core';
import { mediaItem } from '../types/typeDeclarations';


@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent {
  @Input() mediaItem: any;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }
}
