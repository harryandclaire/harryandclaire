import { Component } from '@angular/core';
import { TileInformation } from '../tile/tile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private photoTileInformation = new TileInformation('Photos', '../../assets/brecon-photo.jpg', '/photos');
  private dateTileInformation = new TileInformation('Dates', '../../assets/photo-tile-pic.jpg', '/dates');
  private funnyPhotoTileInformation = new TileInformation('FunnyPhotos', '../../assets/harry-sleeping.jpg', '/error');

  public areas: TileInformation[] = [this.photoTileInformation, this.dateTileInformation, this.funnyPhotoTileInformation];
}
