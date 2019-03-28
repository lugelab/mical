import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapHolderComponent } from './map-holder/map-holder.component';
import { GraphicsHolderComponent } from './graphics-holder/graphics-holder.component';
import {MapExplorerService} from './map-explorer.service';
import { MapExplorerHolderComponent } from './map-explorer-holder/map-explorer-holder.component';
import {FormsModule} from '@angular/forms';
import {VizModule} from '../viz/viz.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import {MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VizModule,
  ],
  declarations: [
    MapHolderComponent,
    GraphicsHolderComponent,
    MapExplorerHolderComponent,
  ],
  exports : [
    MapExplorerHolderComponent
  ],
  providers: [
    MapExplorerService
  ]
})
export class MapExplorerModule { }
