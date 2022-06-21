import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../Services/backend-data.service';
import { PaintingModel } from '../Services/PaintingModel';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.css']
})
export class PaintingsComponent implements OnInit {
  painting:PaintingModel[]=[];

  constructor(public BackendData:BackendDataService) { }

  ngOnInit(): void { 
    this.BackendData.getPaintings().subscribe((data)=>{
      this.painting=JSON.parse(JSON.stringify(data));
      console.log(this.painting);
    })
  }

}
