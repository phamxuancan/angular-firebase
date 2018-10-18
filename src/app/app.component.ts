import {Component, OnInit} from '@angular/core';
import { AngularFirestore , AngularFirestoreDocument, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Item { name: string; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  ngOnInit() {
    this.items.subscribe((res)=>{
      console.log(res);
    });
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }
}
