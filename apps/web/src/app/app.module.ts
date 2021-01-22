import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdnTasksComponent } from './routes/tdn-tasks.component';
import { TodoneService } from './todone.service';
@NgModule({
  declarations: [AppComponent, TdnTasksComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodoneService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
