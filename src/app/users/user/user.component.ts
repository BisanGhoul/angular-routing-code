import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: {id: number, name: string};
  paramsSubcription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = 
    {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //params is an observable
    this.paramsSubcription = this.route.params.subscribe
    (
      //it will be fired whenever new data is sent through observable
      //so, when the parameter change
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    )
    }

    //angular does this for us, but we should do it if we add our own observable
    ngOnDestroy(): void {
      this.paramsSubcription.unsubscribe();
    } 
}
