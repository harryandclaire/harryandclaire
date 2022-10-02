import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent {
  public folders: string[] = ['Tandem', 'Brecon'];
}
