import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data = "";
  temp="";
  hasil=0;
  lambang = "";
  name = 'Angular';
  constructor(private router : Router){}
  enol(){
    this.data += 0;
  }
  satu(){
    this.data += 1;
  }
  dua(){
    this.data += 2;
  }
  tiga(){
    this.data += 3;
  }
  empat(){
    this.data += 4;
  }
  lima(){
    this.data += 5;
  }
  enam(){
    this.data += 6;
  }
  tujuh(){
    this.data += 7;
  }
  delapan(){
    this.data += 8;
  }
  sembilan(){
    this.data += 9;
  }
  tambah(){
    this.temp = this.data;
    this.data = "";
    this.lambang = "+";
  }
  kurang(){
    this.temp = this.data;
    this.data = "";
    this.lambang = "-";
  }
  kali(){
    this.temp = this.data;
    this.data = "";
    this.lambang = "*";
  }
  hasile(){
    if (this.lambang == "+"){
       this.hasil =parseInt(this.temp) +  parseInt(this.data);
    }
    else if (this.lambang == "*"){
       this.hasil = parseInt(this.temp) * parseInt(this.data);
    }
    else if (this.lambang == "-"){
       this.hasil = parseInt(this.temp) - parseInt(this.data);
    }
    alert(this.hasil);
   
    this.router.navigate(['/page1',this.hasil]);
  }
}
