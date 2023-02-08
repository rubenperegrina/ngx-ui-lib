import { Component, Input } from '@angular/core';

export interface Images {
  url: string;
  name: string;
}

@Component({
  selector: 'ngx-ui-image-galery',
  templateUrl: './image-galery.component.html',
  styleUrls: ['./image-galery.component.css']
})
export class ImageGaleryComponent {
  @Input() images: Images[] = [];
}