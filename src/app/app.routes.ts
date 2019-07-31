import { MainComponent } from './components/main/main.component';
import {RouterModule} from '@angular/router';
import {ScoreboardComponent} from './components/scoreboard/scoreboard.component';

const routes = [
  {path: '', component: MainComponent},
  {path: 'scoreboard', component: ScoreboardComponent},
  { path: '**', component: MainComponent }
];

export default RouterModule.forRoot(routes);
