import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, map, Observable, of, Subject, Subscription, switchMap, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.scss']
})
export class TestObservablesComponent implements OnInit, OnDestroy {
  public observable$?: Observable<boolean>;
  private _intervalId?: number;
  public data?: number;

  private _subscription: Subscription = new Subscription();
  private _destroy: Subject<boolean> = new Subject();
  public num?: number;

  constructor() {
  }

  ngOnInit(): void {
    // this.observable$ = new Observable(subscriber => {
    //   this._intervalId = setInterval(() => {
    //     subscriber.next(Date.now());
    //   }, 1000);
    // });

    const observable = new Observable<number>(subscriber => {
      this._intervalId = setInterval(() => {
        subscriber.next(Date.now());
      }, 1000);
    });

    // this._subscription = observable.subscribe(
    //   data => {
    //     this.data = data;
    //   }
    // );

    // this._subscription.add(observable.subscribe(
    //   data => {
    //     this.data = data;
    //   }
    // ));

    // observable.pipe(
    //   map( d => d++ ),
    //   // switchMap(r => of(1,2,3)),
    //   // switchMap(r => interval(1000)),
    //   takeUntil(this._destroy),
    // ).subscribe(
    //   data => {
    //     this.data = data;
    //   }
    // );

    this.observable$ = observable.pipe(
      tap(data => {
        console.log(data);
        this.data = data;
      }),
      switchMap(r => interval(100)),
      tap((num: number) => {
        console.log(num);
        this.num = num;
      }),
      switchMap( n => of(true)),
      takeUntil(this._destroy),
    );
  }

  ngOnDestroy(): void {
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }

    if (this._subscription) {
      this._subscription.unsubscribe();
    }

    this._destroy.next(true);
    this._destroy.complete();
  }
}
