export type mediaItemDeclaration = {
  id: number;
  name: string;
  medium: string;
  category: category;
  year: number;
  watchedOn: any;
  isFavorite: boolean;
}


export type category = {
  //productId: number;
  productName: string;
  //productCode: string;
}
