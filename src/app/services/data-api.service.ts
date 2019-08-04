import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { CulturaInterface } from './../models/Culturas';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { }
  private culturasCollection: AngularFirestoreCollection<CulturaInterface>;
  private culturas: Observable<CulturaInterface[]>;
  private culturaDoc: AngularFirestoreDocument<CulturaInterface>;
  private cultura: Observable<CulturaInterface>;
  public selectedCultura: CulturaInterface = {
    id: null
  };


  getAllCulturas() {
    this.culturasCollection = this.afs.collection<CulturaInterface>('culturas');
    return this.culturas = this.culturasCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as CulturaInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
}

