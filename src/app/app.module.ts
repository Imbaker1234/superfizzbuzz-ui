import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app-core/app.component';
import { ButtonConsoleComponent } from './components/main/button-console/button-console.component';
import { NgmatModule } from './modules/ngmat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './components/main/timer/timer.component';
import { ToastService } from './services/toast.service';
import { GameService } from './services/game.service';
import { ScoreComponent } from './components/main/score/score.component';
import { OptionsComponent } from './components/main/options/options.component';
import { QuoteService } from './services/quote.service';
import { KeyboardListenerService } from './services/keyboard-listener.service';
import { RulesComponent } from './components/main/rules/rules.component';
import {MatDividerModule, MatRadioModule, MatRippleModule, MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { DockComponent } from './components/main/dock/dock.component';
import { RuleService } from './services/rule.service';
import { MainComponent } from './components/main/main.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import appRoutes from './app.routes';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReverseTimerComponent } from './components/main/reverse-timer/reverse-timer.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonConsoleComponent,
    TimerComponent,
    ScoreComponent,
    OptionsComponent,
    RulesComponent,
    DockComponent,
    MainComponent,
    ScoreboardComponent,
    NavbarComponent,
    ReverseTimerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgmatModule,
    BrowserAnimationsModule,
    FormsModule,
    appRoutes,
    RouterModule,
    HttpClientModule,
    MatTableModule
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
