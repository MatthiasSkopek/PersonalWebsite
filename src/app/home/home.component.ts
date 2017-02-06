import {
  Component, ViewChild, ElementRef,
  ContentChild
} from '@angular/core';
declare var ParticleNetwork: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  @ViewChild('particle') div: ElementRef;

  private can: any;

  constructor() {
  }

  ngAfterViewInit() {
    this.can = this.div.nativeElement;
    var options = {
      particleColor: '#FF9800',
      background: '#333333',
      interactive: true,
      speed: 'fast',
      density: 'medium'
    };
    var particleCanvas = new ParticleNetwork(this.can, options);
  }
}
