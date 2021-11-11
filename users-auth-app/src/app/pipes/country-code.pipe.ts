import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "countryCode"
})
export class CountryCode implements PipeTransform {
  transform(value : any, code : string, isAdmin : boolean){
    switch (code) {
      case 'USA':
        return "+1 " + value;
      case 'AUS':
        return "+12 " + value;
      default:
        return "+91 " + value;
    }

  }
}


// Create a pipe which will reverse the string
// ng g p pipes/reverse
