import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { CulturaInterface } from './../models/Culturas';
import { DataApiService } from './../services/data-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, private dataApi: DataApiService, private storage: AngularFireStorage) { }

  @ViewChild('btnClose', null) btnClose: ElementRef;
  @Input() userUid: string;

  async close(){
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  onUpload(e) {
    console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `culturas/cultura_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

  AddCultura(formCultura: NgForm): void {
    if (formCultura.value.id == null) {
      this.dataApi.addCultura(formCultura.value);
    } else {
      // Update
      this.dataApi.updateCultura(formCultura.value);
    }
    formCultura.resetForm();
    this.close();
  }

}
