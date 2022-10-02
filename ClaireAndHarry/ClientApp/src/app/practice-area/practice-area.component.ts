import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-area',
  templateUrl: './practice-area.component.html',
  styleUrls: ['./practice-area.component.css']
})
export class PracticeArea {
  public folders: string[] = ['Tandem', 'Brecon'];
}
