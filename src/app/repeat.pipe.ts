import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'repeat',
})

export class MyFirstPipe implements PipeTransform{

    transform(value : string, count: number){

        return value.repeat(count);
    }
}