import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Mobility',
      resultUrl: '/result-mobility-page',
      adviceUrl: '/advice-feed-page'
    },
    {
      category: 'Feed',
      resultUrl: '/result-feed-page',
      adviceUrl: '/advice-feed-page'

    },
    {
      category: 'Acommodation',
      resultUrl: '/result-accomodation-page',
      adviceUrl: '/advice-feed-page'
    },
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }
}