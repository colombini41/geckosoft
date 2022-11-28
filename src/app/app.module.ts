import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componenti/header/header.component';
import { BodyComponent } from './componenti/body/body.component';
import { SearchComponent } from './componenti/body/search/search.component';
import { SpaziogifComponent } from './componenti/body/spaziogif/spaziogif.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from './componenti/body/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FooterComponent } from './componenti/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        SearchComponent,
        SpaziogifComponent,
        DialogComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatCardModule,
        MatGridListModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatRadioModule,
        InfiniteScrollModule
    ]
})
export class AppModule { }
