import { Component } from '@angular/core';
import { TileInformation } from '../tile/tile.component';

@Component({
  selector: 'app-date-information',
  templateUrl: './date-information.component.html'
})
export class DateInformationComponent {
  private walkTileInformation = new TileInformation('Leckhampton hill walk', '', '');
  private drinksTileInformation = new TileInformation('Leckhampton hill drinks', '', '');
  private climbingTileInformation = new TileInformation('Climbing', '', '');
  private coconutTreeTileInformation = new TileInformation('Coconut tree', '', '');
  private butterflyFarmTileInformation = new TileInformation('Butterfly farm', '', '');
  private stratfordEyeTileInformation = new TileInformation('Stratford eye', '', '');
  private miniGolfTileInformation = new TileInformation('Mini golf', '', '');
  private rowingTileInformation = new TileInformation('Rowing', '', '');
  private tandemTileInformation = new TileInformation('Tandem', './../assets/Tandem/311451383_1058060854891396_6981825023042901904_n.jpg', '');
  private kayakingTileInformation = new TileInformation('Kayaking', '../../assets/Brecon/266227872_1293469491172758_5104924320396596464_n (1).jpg', '');
  private waterfallsTileInformation = new TileInformation('Waterfalls', '../../assets/Brecon/265768635_930169137872962_3277610105485987502_n (1).jpg', '');
  private jamesBondTileInformation = new TileInformation('James Bond', '', '');
  private sixTileInformation = new TileInformation('Six', '', '');
  private winterWonderLandTileInformation = new TileInformation('Winter wonderland', '../../assets/Winter wonderland/264762131_961400591430032_5702831909006699886_n (1).jpg', '');
  private cheltenhamStratfordTileInformation = new TileInformation('Cheltenham to Stratford Tandem', '../../assets/Cheltenham to Stratford Tandem/311046737_784590529436039_7046303006592515464_n.jpg', '');
  private hamiltonTileInformation = new TileInformation('Hamilton', '../../assets/Hamilton/309405828_591797699405873_1978909731681682130_n.jpg', '');
  private cotswoldWaterParkTileInformation = new TileInformation('Cotswold water park', '../../assets/Cotswold water park/311468021_671066324265824_8240285443890374044_n.jpg', '');
  private lymeRegisTileInformation = new TileInformation('Lyme Regis', '../../assets/Lyme Regis/311875172_980101886715358_3921326655917941746_n.jpg', '');
  private croatiaTileInformation = new TileInformation('Croatia', '../../assets/Croatia/308470321_597828222089581_1566932102701892160_n.jpg', '');

  public dates: TileInformation[] = [
    this.walkTileInformation,
    this.drinksTileInformation,
    this.climbingTileInformation,
    this.climbingTileInformation,
    this.coconutTreeTileInformation,
    this.butterflyFarmTileInformation,
    this.stratfordEyeTileInformation,
    this.miniGolfTileInformation,
    this.rowingTileInformation,
    this.tandemTileInformation,
    this.kayakingTileInformation,
    this.waterfallsTileInformation,
    this.jamesBondTileInformation,
    this.sixTileInformation,
    this.winterWonderLandTileInformation,
    this.cheltenhamStratfordTileInformation,
    this.hamiltonTileInformation,
    this.cotswoldWaterParkTileInformation,
    this.lymeRegisTileInformation,
    this.croatiaTileInformation
  ]
}
