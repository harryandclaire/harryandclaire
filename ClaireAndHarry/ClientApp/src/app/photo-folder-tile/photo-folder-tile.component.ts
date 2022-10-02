import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-folder-tile',
  templateUrl: './photo-folder-tile.component.html',
  styleUrls: ['./photo-folder-tile.component.css']
})
export class PhotoFolderTileComponent {
  @Input() folderName: string | undefined;
}
