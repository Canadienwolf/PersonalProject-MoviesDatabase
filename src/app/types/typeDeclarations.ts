import { Component } from '@angular/core';

export type mediaItem = {
  mediaItem: string;
  productId: number;
  productName: string;
  productCode: string;
  category: category;
}

export type category = {
  productId: number;
  productName: string;
  productCode: string;
}
