import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoleComponent } from './hole/hole.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSelectModule, MatOptionModule, MatButtonModule, MatInputModule } from '@angular/material';
import { TotalComponent } from './total/total.component';
import { CourseSelectComponent } from './course-select/course-select.component';
import { ApiGetterService } from './api-getter.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasserService } from './passer.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { DuplicateNamesPipe } from './duplicate-names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HoleComponent,
    TotalComponent,
    CourseSelectComponent,
    DuplicateNamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ApiGetterService, PasserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
