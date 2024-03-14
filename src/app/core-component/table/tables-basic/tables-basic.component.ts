import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';

@Component({
  selector: 'app-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: ['./tables-basic.component.scss'],
})
export class TablesBasicComponent implements OnInit {
  public routes = routes;

  constructor() {}
  arr = [
    {
      "name":"Rahul","email":"misspooja508@gmail.com","phn":123456789,
      "address":[
        {"city":"faridabad",state:"HR",},{"city":"Ballabgarh",state:"HR",},
      ]
    },
    {
      "name":"Pooja","email":"misspooja508@gmail.com","phn":789999,
      "address":[
        {"city":"fbd",state:"mp",},{"city":"blb",state:"mp",},
      ]
    },
   ]
   arr1 =
  {'biodata': [
    {
      "name":"Rahul","email":"misspooja508@gmail.com","phn":123456789,
      "address":[
        {"city":"faridabad",state:"HR",},{"city":"Ballabgarh",state:"HR",},
      ]
    },
    {
      "name":"Pooja","email":"misspooja508@gmail.com","phn":789999,
      "address":[
        {"city":"fbd",state:"mp",},{"city":"blb",state:"mp",},
      ]
    },
   ]
  }
  arr2 =
  {'biodata': [
    {
      "name":"Rahul","email":"misspooja508@gmail.com","phn":{
        "mobile":123654,tel:155
      },
      "address":[
        {"city":{"name":"Blb",product:[{qty:52,price:85},{qty:52,price:85}]},state:"HR",},{"city":"Ballabgarh",state:"HR",},
      ]
    },
    {
      "name":"Pooja","email":"misspooja508@gmail.com","phn":789999,
      "address":[
        {"city":"fbd",state:"mp",},{"city":"blb",state:"mp",},
      ]
    },
   ]
  }
  ngOnInit(): void {
    console.warn(this.arr);
    console.warn(this.arr1);
    console.warn(this.arr2);
  }

}
