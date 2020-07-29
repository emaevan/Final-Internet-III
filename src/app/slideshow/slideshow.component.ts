import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  selectedImage = 0;

  imageList = [
    "https://i.imgur.com/PcDLY8J.jpg",
    "https://i.imgur.com/gn6ITIo.jpg",
    "https://i.imgur.com/ngcenRp.jpg",
    "https://i.imgur.com/EsuJiz0.jpg"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  nextImage(){
    this.selectedImage++;

    if(this.selectedImage > this.imageList.length-1){
      this.selectedImage = 0;
    }
  }

  changeImage(index){
    this.selectedImage = index;
  }
}
