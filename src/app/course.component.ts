import { Component } from '@angular/core';

@Component({
    selector : 'course',
    templateUrl : './course.component.html'
})

export class courseComponent {
    title = 'BVRS Technologies';
    email ="div@gmail.com";
    read(a,b){
        //alert('welcome to BVRS') 
        console.log(a.parentElement,b)   
    }
    onKeyUp(){
        console.log(this.email)
    }

    

}