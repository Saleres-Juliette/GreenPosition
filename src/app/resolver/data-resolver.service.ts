import { TestLoaderService } from './../services/test-loader.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataResolverService implements Resolve<any> {

  constructor(private dataService: TestLoaderService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const testId = route.paramMap.get('id');
    return this.dataService.getData(testId);
  }
}
