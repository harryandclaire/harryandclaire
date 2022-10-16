import { Component } from '@angular/core';
import { TileInformation } from '../tile/tile.component';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html'
})
export class PhotosComponent {
  private tandemTile = new TileInformation('Tandem', '', '');

  public folders: TileInformation[] = [this.tandemTile];
}
