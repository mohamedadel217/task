import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import{DataProvider} from '../../providers/data/data'
import { CategoryPage } from '../category/category';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cateogries:any;
  loader:any;
  constructor(public navCtrl: NavController,
    public data:DataProvider,
    ldCtrl:LoadingController
    ) {
      const loader = ldCtrl.create({
        spinner: "ios",
        cssClass: "loading"
      })
      this.loader=loader
      this.loader.present();
  }
  ionViewWillLoad(){
 this.loadCategories();
  }
  loadCategories(){
    this.data.getCateogries().then((res)=>{
      this.loader.dismiss();
      console.log(res);
      this.cateogries=res;
      
    })
  }
  goToCategory(category){
    console.log(category);
    this.navCtrl.push(CategoryPage,category);
  }
}
