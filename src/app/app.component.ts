import { Component } from '@angular/core';
import { Images } from 'projects/ngx-ui-library/src/ui-image-galery/image-galery/image-galery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-library';
  myImages: Images[] = [
    {
      url: '../assets/images/movie1.PNG',
      name: 'Character 1'
    },
    {
      url: '../assets/images/movie2.PNG',
      name: 'Character 2'
    },
    {
      url: '../assets/images/movie3.PNG',
      name: 'Character 3'
    },
    {
      url: '../assets/images/movie4.PNG',
      name: 'Character 4'
    },
    {
      url: '../assets/images/movie5.PNG',
      name: 'Character 5'
    },
  ]
}