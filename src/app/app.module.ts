import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoleComponent } from './hole/hole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { TotalComponent } from './total/total.component';
import { CourseSelectComponent } from './course-select/course-select.component';
import { PlayerComponent } from './player/player.component';
import { ApiGetterService } from './api-getter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HoleComponent,
    TotalComponent,
    CourseSelectComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ApiGetterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
