import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppsService } from '../../../apps.service';

@Component({
  selector: 'app-apps-config-form',
  templateUrl: './apps-config-form.component.html',
  styleUrls: ['./apps-config-form.component.scss']
})
export class AppsConfigFormComponent implements OnInit {
  form: FormGroup;
  key: AbstractControl;
  value: AbstractControl;
  submitted: Boolean = false;

  constructor(
    fb: FormBuilder,
    private appsService: AppsService,
    private dialogRef: MatDialogRef<AppsConfigFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.form = fb.group({
      key: [this.data.key, Validators.compose([Validators.required])],
      value: ['', Validators.compose([Validators.required])]
    });
    this.key = this.form.controls['key'];
    this.value = this.form.controls['value'];
  }

  ngOnInit() {
  }

  onCloseConfirm(values): void {
    this.submitted = true;
    let key;
    this.data.key ? key = this.data.key : key = values.key;
    const val = { [key]: values.value };
    this.appsService.createAppConfig(this.data.id, val)
    .subscribe(r => {
      console.log(r);
      this.dialogRef.close();
    });
    /*
    this.appsService.register(values)
    .subscribe(r => {
      console.log(r);

      this.dialogRef.close();
    });
    */
  }
  onCloseCancel(): void {
    this.dialogRef.close('cancel');
  }

}
