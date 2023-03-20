import { appReducer } from './state/app.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { SlotsNavigationComponent } from './slots/slots-navigation/slots-navigation.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { SlotComponent } from './slots/slot/slot.component';
import { SlotsListComponent } from './slots/slots-list/slots-list.component';
import { ShortenPipe } from './pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    SlotsNavigationComponent,
    SlotComponent,
    SlotsListComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
