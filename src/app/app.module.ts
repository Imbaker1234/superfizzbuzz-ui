import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonConsoleComponent} from './button-console/button-console.component';
import {NgmatModule} from './ngmat/ngmat.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TimerComponent } from './timer/timer.component';
import {ToastService} from './toast.service';
import {GameService} from './game.service';
import { ScoreComponent } from './score/score.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { OptionsComponent } from './options/options.component';
import {QuoteService} from './quote.service';
import {KeyboardListenerService} from './keyboard-listener.service';
import { RulesComponent } from './rules/rules.component';
import {MatRadioModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { DockComponent } from './dock/dock.component';
import {RuleService} from './rule.service';

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
