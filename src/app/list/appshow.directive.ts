
import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener, HostBinding} from '@angular/core';

@Directive({selector:'input[type="password"]'})

export class HighliteDirective implements OnInit  {

    @Input('appBgColor') appBgColor:string;
    @Input() appColor:string;
    @Input() appSize:string;

    constructor(private ele: ElementRef, private render: Renderer2) {}

    ngOnInit() {
        this.render.setStyle(this.ele.nativeElement, 'background-color', this.appBgColor);
        this.render.setStyle(this.ele.nativeElement, 'color', this.appColor);
        this.render.setStyle(this.ele.nativeElement, 'font-size', this.appSize);
    }

    @HostListener('mouseenter',  ['$event.target']) onClick(event) {
        console.log(event);
        this.border = '2px solid green';
        this.value = 'siva sankar'
        this.ele.nativeElement.style.background = 'orange'
    }

    @HostListener('mouseleave') onMouseLeave() {
        console.log('mouse is leaved');
        this.border = ''
        this.value = 'siva'
        this.ele.nativeElement.style.background = '';
    }

    @HostBinding('style.border') border:string;
    @HostBinding('value') value:string = 'siva';

}


