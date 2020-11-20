import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestLoaderService {
  private data = [];

  constructor() { }

  setData(id, data) {
    this.data[id] = data;
  }

  getData(id) {

    return fetch('./assets/json/' + id + '.json').then(res => res.json())
    .then(json => {
      this.data = json;
      console.log(this.data);
      return this.data;
    });
  }
}
