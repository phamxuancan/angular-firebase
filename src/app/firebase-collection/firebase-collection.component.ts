import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Item} from '../app.component';

@Component({
  selector: 'app-firebase-collection',
  templateUrl: './firebase-collection.component.html',
  styleUrls: ['./firebase-collection.component.css']
})
export class FirebaseCollectionComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  ngOnInit() {
    this.items.subscribe((res) => {
      // console.log(res);
    });
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

}
