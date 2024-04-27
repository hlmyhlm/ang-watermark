import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watermark',
  templateUrl: './watermark.component.html',
  styleUrls: ['./watermark.component.css']
})
export class WatermarkComponent implements OnInit {

  watermarkData = [
    { id: "1", name: "John", lastname: "Doe" },
 //   { id: "2", name: "Jane", lastname: "Smith" },
  //  { id: "3", name: "Bob", lastname: "Johnson" }
    /* Add more data as needed */
  ];

  watermarkStyles: any[] = [];
  rowCount: number = 4; // specify number of rows
  columnCount: number = 4; // specify number of columns

  constructor() {
  }

  ngOnInit(): void {
    this.generateWatermarks();
  }

  generateWatermarks() {

    for (let row = 0; row < this.rowCount; row++) {
      for (let column = 0; column < this.columnCount; column++) {
        let data = this.watermarkData[(row * this.columnCount + column) % this.watermarkData.length];
        this.watermarkStyles.push({
          'top': `${100 * row / this.rowCount}%`,
          'left': `${100 * column / this.columnCount}%`,
          'data': data
        });
      }
    }

  }

  printToPdf() {
    window.print();
  }
}
