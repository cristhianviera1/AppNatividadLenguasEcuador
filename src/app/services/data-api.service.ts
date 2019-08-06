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

  getOneCultura(idCultura: string) {
    this.culturaDoc = this.afs.doc<CulturaInterface>(`culturas/${idCultura}`);
    return this.cultura = this.culturaDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as CulturaInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addCultura(cultura: CulturaInterface) {
    this.culturasCollection.add(cultura);
  }
  searchCulturas() {
    this.culturaDoc.collection('culturas').valueChanges()
      .subscribe(culturas => {
        return culturas
      });
  }

  updateCultura(cultura: CulturaInterface) {
    const idCultura = cultura.id;
    this.culturaDoc = this.afs.doc<CulturaInterface>(`culturas/${idCultura}`);
    this.culturaDoc.update(cultura);
  }

  deleteCultura(idCultura: string) {
    this.culturaDoc = this.afs.doc<CulturaInterface>(`culturas/${idCultura}`);
    this.culturaDoc.delete();
  }
}

