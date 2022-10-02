import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoFolderTileComponent } from './photo-folder-tile/photo-folder-tile.component';
import { DatesComponent } from './dates/dates.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PracticeArea } from './practice-area/practice-area.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PhotosComponent,
    PhotoFolderTileComponent,
    DatesComponent,
    ErrorComponent,
    LoginComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'dates', component: DatesComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'login', component: LoginComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'practice-area', component: PracticeArea },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
