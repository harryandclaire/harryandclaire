import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent {
  @Input() tileInformation: TileInformation = new TileInformation('Tile', '', '/home')
}

export class TileInformation {
  constructor(name: string, photoLocation: string, routerLink: string) {
    this.Name = name;
    this.PhotoLocation = photoLocation;
    this.RouterLink = routerLink;
  }

  Name: string;
  PhotoLocation: string;
  RouterLink: string;
}
