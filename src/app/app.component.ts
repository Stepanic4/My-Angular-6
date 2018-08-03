import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to my page!';
}

export class Constants {
    static get Default(): any {
        return {
            API_ENDPOINT: 'https://backend.vstudy.velociteach.com/study/api',
            IMAGE_ENDPOINT: 'https://backend.vstudy.velociteach.com/study/api'
        };
    }
}