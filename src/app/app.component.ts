import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewUserComponent } from "./view-user/view-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ViewUserComponent, EditUserComponent]
})
export class AppComponent {
  title = 'ng-18-signal';

  constructor(){
    effect(()=>{
      console.log(`Price value has been changed ${this.price()}`);
    });

  }

  price = signal(20);
  discount = signal(5);
  final_price = computed(() => {
    return this.price() - (this.price() * this.discount()) / 100;
  });

  setPrice() {
    this.price.set(10);
  }

  updatePrice() {
    this.price.update((value) => {
      return value + 10;
    });
  }
}
