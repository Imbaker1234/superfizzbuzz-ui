import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app-core/app.component';
import {ButtonConsoleComponent} from './components/button-console/button-console.component';
import {NgmatModule} from './modules/ngmat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TimerComponent } from './components/timer/timer.component';
import {ToastService} from './services/toast.service';
import {GameService} from './services/game.service';
import { ScoreComponent } from './components/score/score.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { OptionsComponent } from './components/options/options.component';
import {QuoteService} from './services/quote.service';
import {KeyboardListenerService} from './services/keyboard-listener.service';
import { RulesComponent } from './components/rules/rules.component';
import {MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { DockComponent } from './components/dock/dock.component';
import {RuleService} from './services/rule.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonConsoleComponent,
    TimerComponent,
    ScoreComponent,
    InspirationComponent,
    OptionsComponent,
    RulesComponent,
    DockComponent
  ],
  imports: [
    BrowserModule,
    NgmatModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [
    ToastService,
    GameService,
    QuoteService,
    KeyboardListenerService,
    RuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
