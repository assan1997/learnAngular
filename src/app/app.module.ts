import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayDataBindingComponent } from './binding/two-way-data-binding/two-way-data-binding.component';
import { CustomAtributeDirectiveComponent } from './directive/custom-atribute-directive/custom-atribute-directive.component';
import { CustomAtributeDirectiveDirective } from './directive/custom-atribute-directive.directive';
import { PipeComponent } from './pipe/pipe.component';
import { PipePipe } from './pipe/pipe.pipe';

@NgModule({
  
  declarations: [
    AppComponent,
    TwoWayDataBindingComponent,
    CustomAtributeDirectiveComponent,
    CustomAtributeDirectiveDirective,
    PipeComponent,
    PipePipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
