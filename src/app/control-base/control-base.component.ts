import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-base',
  templateUrl: './control-base.component.html',
  styleUrls: ['./control-base.component.css']
})
export class ControlBaseComponent implements OnInit {

  @Input() label: string;
  @Input() controlName: string;
  @Input() form: FormGroup;
  @Input() appInputMask: any;
  

  constructor() { }

  ngOnInit(): void {
  }

}
