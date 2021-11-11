import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() title : string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);

  }
  ngDoCheck(): void {
    console.log("ngDoCheck");

  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");

  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");

  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");

  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.title = null;
  }

  ngOnInit(){
    console.log("ngOnInit")
  }

}
