import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-apps-create',
  templateUrl: './apps-create.component.html',
  styleUrls: ['./apps-create.component.scss']
})
export class AppsCreateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AppsCreateComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  onCloseConfirm(appname): void {
    this.dialogRef.close(appname);
  }
  onCloseCancel(): void {
    this.dialogRef.close('cancel');
  }

}
