import {Component, trigger, state, style, transition, animate, keyframes} from '@angular/core';
import {ItemService} from "./showcase/item.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ItemService],
  animations:[
    trigger('damnAnimation',[
      state('inactive', style({
        'transform': 'scale(1) translateX(0)'
      })),
      state('active',style({
        'transform': 'scale(0.9) translateX(50vw)',
        'height':'100vh',
        'overflow':'hidden'
      })),
      transition('inactive <=> active', animate('400ms ease-in-out'))
    ]),
    trigger('damnAnimation2',[
      state('inactive', style({
        'position': 'static'
      })),
      state('active',style({
        'position': 'fixed'
      })),
      transition('inactive <=> active', animate('0ms ease-in-out'))
    ]),
    trigger('damnAnimationMenu',[
      state('inactive', style({
        'margin-left': '-50vw'
      })),
      state('active',style({
        'margin-left': '0vw'
      })),
      transition('inactive => active', animate('600ms ease-in-out')),
      transition('active => inactive', animate('300ms ease-in-out'))
    ]),
    trigger('LineOne',[
      state('inactive', style({

      })),
      state('active',style({
        'transform': 'rotate(45deg)',
        'top':'11px'
      })),
      transition('inactive => active', animate(700,keyframes([
        style({'top':'5px',transform: 'rotate(0deg)', offset: 0}),
        style({'top':'7px',transform: 'rotate(0deg)', offset: 0.1}),
        style({'top':'11px',transform: 'rotate(0deg)', offset: 0.3}),
        style({'top':'11px',transform: 'rotate(0deg)', offset: 0.8}),
        style({'top':'11px',transform: 'rotate(45deg)', offset: 1}),
      ]))),
      transition('active => inactive', animate(500,keyframes([
        style({'top':'11px','transform': 'rotate(-45deg)', offset: 0}),
        style({'top':'11px','transform': 'rotate(0deg)', offset: 0.2}),
        style({'top':'11px','transform': 'rotate(0deg)', offset: 0.3}),
        style({'top':'11px','transform': 'rotate(0deg)', offset: 0.8}),
        style({'top':'5px','transform': 'rotate(0deg)', offset: 0.9}),
        style({'top':'0px','transform': 'rotate(0deg)', offset: 1})
      ])))
    ]),
    trigger('LineTwo',[
      state('inactive', style({

      })),
      state('active',style({
        'opacity': '0',
        'margin-bottom':'-2px',
        'margin-top':'-2px'
      })),
      transition('inactive => active', animate('100ms')),
      transition('active => inactive', animate('400ms'))
    ]),
    trigger('LineThree',[
      state('inactive', style({
        'transform': 'rotate(0deg)'
      })),
      state('active',style({
        'width':'30px',
        'top':'11px',
        'transform': 'rotate(-45deg)'
      })),
      transition('inactive => active', animate(700,keyframes([
        style({'top':'15px',width:'30px','transform': 'rotate(0deg)', offset: 0}),
        style({'top':'13px',width:'30px','transform': 'rotate(0deg)', offset: 0.1}),
        style({'top':'11px',width:'30px','transform': 'rotate(0deg)', offset: 0.3}),
        style({'top':'11px',width:'30px','transform': 'rotate(0deg)', offset: 0.8}),
        style({'top':'11px',width:'30px','transform': 'rotate(-45deg)', offset: 1})
      ]))),
      transition('active => inactive', animate(500,keyframes([
        style({'top':'11px','transform': 'rotate(-45deg)', offset: 0}),
        style({'top':'11px','transform': 'rotate(0deg)', offset: 0.2}),
        style({'top':'11px','transform': 'rotate(0deg)', offset: 0.3}),
        style({'top':'11px','transform': 'rotate(0deg)', offset: 0.8}),
        style({'top':'17px','transform': 'rotate(0deg)', offset: 0.9}),
        style({'top':'20px','transform': 'rotate(0deg)', offset: 1})
      ])))
    ])
  ]
})
export class AppComponent {
  state: string="inactive";
  translate
  toggleState(){
    if(this.state == "inactive"){
      this.state="active";
    }else{
      this.state="inactive";
    }
  }
  toggleStateContainer() {
    if (this.state == "active") {
      this.state = "inactive";
    }
  }
}
