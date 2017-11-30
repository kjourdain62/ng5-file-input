import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.scss']
})
export class FileDropComponent implements OnInit {

  @Input() title:string;
  @Input() allowedExtensions:string[];
  @Output() filesAccepted:EventEmitter<FileReader[]>;
  @Output() filesRejected:EventEmitter<FileReader[]>;
  public _filesAccepted:FileReader[];
  public _filesRejected:FileReader[];
  constructor() { }

  ngOnInit() {
    this._filesAccepted=[];
    this._filesRejected=[];
    this.filesAccepted= new EventEmitter<FileReader[]>();
    this.filesRejected= new EventEmitter<FileReader[]>();
  }
   readUrl($event) {
     $event.preventDefault();
     this._filesAccepted=[];
     this._filesRejected=[];
     // If dropped items aren't files, reject them

     let dt = $event.dataTransfer;
     console.log(dt);
     if ( dt && dt.items) {
       // Use DataTransferItemList interface to access the file(s)
       for (let i=0; i < dt.items.length; i++) {
         if (dt.items[i].kind == "file") {
           let f = dt.items[i].getAsFile();
           if(this.allowedExtensions &&this.allowedExtensions.length>0){
             let ext=f.name.split('.').pop();
             if(this.allowedExtensions.indexOf(ext)>=1){
               this._filesAccepted.push(f);
             }else{
               this._filesRejected.push(f);
             }
           }else{
            this._filesAccepted.push(f);
           }

         }
       }
       this.filesAccepted.emit(this._filesAccepted);
       this.filesRejected.emit(this._filesRejected);
     } else {
       // Use DataTransfer interface to access the file(s)
       for (let i=0; i < dt.files.length; i++) {
         if(this.allowedExtensions &&this.allowedExtensions.length>0){
           let ext=dt.files[i].name.split('.').pop();
           if(this.allowedExtensions.indexOf(ext)>=1){
             this._filesAccepted.push(dt.files[i]);
           }else{
             this._filesRejected.push(dt.files[i]);
           }
         }else{
           this._filesAccepted.push(dt.files[i]);
         }
       }
       this.filesAccepted.emit(this._filesAccepted);
       this.filesRejected.emit(this._filesRejected);
     }

  }


}
