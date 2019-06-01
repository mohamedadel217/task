import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  data: any;
  products: any;
  header: any;
  img: any;
  Segment: any="First";
  loader:any;
  constructor(public navCtrl: NavController,
    ldCtrl:LoadingController,    
    public navParams: NavParams) {
      const loader = ldCtrl.create({
        spinner: "ios",
        cssClass: "loading"
      })
      this.loader=loader
      this.loader.present();
  }

  ionViewDidLoad() {

   this.data= this.navParams.data;
   this.products=this.data['products'];
   this.header=this.data['name'];
   this.img=this.data['category_img']
   this.loader.dismiss();
   console.log(this.data,  this.header,this.products);
 
   
  }
  back(){
    this.navCtrl.pop();
  }
}
