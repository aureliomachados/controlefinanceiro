import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecebimentoFormPage } from '../pages/recebimento-form-page/recebimento-form-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecebimentoFormPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecebimentoFormPage
  ],
  providers: []
})
export class AppModule {}
