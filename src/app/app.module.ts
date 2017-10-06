import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { DetailComponent } from './routes/detail/detail.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
