import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseCollectionComponent } from './firebase-collection/firebase-collection.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
const routersConfig: Routes = [
  {path: '', component: IndexComponent},
  {path: 'register', component: RegisterComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    FirebaseCollectionComponent,
    IndexComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features\
    RouterModule.forRoot(routersConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
