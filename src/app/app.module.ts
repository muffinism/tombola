import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { TabelloneComponent } from './tabellone/tabellone.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SchedaComponent } from './scheda/scheda.component';
import { MatTableModule } from '@angular/material/table';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TabelloneComponent,
    SchedaComponent,
    IndexComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
