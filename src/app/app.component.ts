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
  tampil="";
  hasil=0;
  lambang = "";
  name = 'Angular';
  constructor(private router : Router){}
  enol(){
    this.data += 0;
    this.tampil += 0;
  }
  satu(){
    this.data += 1;
     this.tampil += 1;
  }
  dua(){
    this.data += 2;
     this.tampil += 2;
  }
  tiga(){
    this.data += 3;
     this.tampil += 3;
  }
  empat(){
    this.data += 4;
     this.tampil += 4;
  }
  lima(){
    this.data += 5;
     this.tampil += 5;
  }
  enam(){
    this.data += 6;
     this.tampil += 6;
  }
  tujuh(){
    this.data += 7;
     this.tampil += 7;
  }
  delapan(){
    this.data += 8;
     this.tampil += 8;
  }
  sembilan(){
    this.data += 9;
     this.tampil += 9;
  }
  tambah(){
    this.temp = this.data;
    this.data = "";
    this.lambang = "+";
     this.tampil += "+";
  }
  kurang(){
    this.temp = this.data;
    this.data = "";
    this.lambang = "-";
     this.tampil += "-";
  }
  kali(){
    this.temp = this.data;
    this.data = "";
    this.lambang = "*";
     this.tampil += "*";
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
    this.tampil = String(this.hasil);
    this.router.navigate(['/page1',this.hasil]);
  }
}
