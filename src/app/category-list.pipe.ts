import { Pipe, PipeTransform, Component } from '@angular/core';
import { mediaItem, category } from './types/typeDeclarations';

@Pipe({
  name: 'categoryList'
})


export class CategoryListPipe implements PipeTransform
{


  transform(mediaItems: mediaItem[])
  {
    const categories:category[]  = [];
    mediaItems.forEach(mediaItem =>
    {
      if (categories.indexOf(mediaItem.category) <= -1)
      {
        categories.push(mediaItem.category);
      }
    });
    return categories;
  }
}


// templateUrl: './media-item-list.component.html',
