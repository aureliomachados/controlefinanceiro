import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Recebimento } from '../models/recebimento';

/*
  Generated class for the RecebimentoFormPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recebimento-form-page',
  templateUrl: 'recebimento-form-page.html'
})
export class RecebimentoFormPage {

  public recebimentoObj: Recebimento;
  recebimento = {};

  constructor(public navCtrl: NavController) {}

  cadastraRecebimento(){
    this.recebimentoObj = <Recebimento> this.recebimento;
    console.log(this.recebimentoObj);
  }


  ionViewDidLoad() {
    console.log('Hello RecebimentoFormPage Page');
  }


}
