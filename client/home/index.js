import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Home {

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  activate() {
    return this.httpClient.fetch('/api/tech')
      .then(response => response.json())
      .then(response => {
        this.items = response;
      });

  }

}