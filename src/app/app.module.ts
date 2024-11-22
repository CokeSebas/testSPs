import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Asegúrate de que esto esté importado
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule  // Esto incluye CommonModule automáticamente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
