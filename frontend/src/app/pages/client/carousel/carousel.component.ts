import { Component } from '@angular/core';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  items: string[] = ['https://picsum.photos/id/944/900/500','https://picsum.photos/id/940/900/500','https://picsum.photos/id/943/900/500','https://picsum.photos/id/924/900/500','https://picsum.photos/id/974/900/500','https://picsum.photos/id/914/900/500','https://picsum.photos/id/912/900/500','https://picsum.photos/id/911/900/500','https://picsum.photos/id/944/900/500','https://picsum.photos/id/944/900/500','https://picsum.photos/id/944/900/500','https://picsum.photos/id/944/900/500','https://picsum.photos/id/944/900/500','https://picsum.photos/id/944/900/500', 'Slide 2', 'Slide 3']; // Replace with your actual slide content
  currentIndex = 0;
  slideWidth: number;

  constructor() {
    this.slideWidth = 100 / this.items.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.items.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.items.length - 1) ? 0 : this.currentIndex + 1;
  }
}