import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AssessmentCycleComponent } from './assessment-cycle/assessment-cycle.component';
import { AssessmentAgentComponent } from './assessment-agent/assessment-agent.component';

@NgModule({
  declarations: [						
    AppComponent,
      HomeComponent,
      AboutComponent,
      ServicesComponent,
      AssessmentCycleComponent,
      AssessmentAgentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
