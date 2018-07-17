import {
  Input, Output, EventEmitter,
  ViewChild, ElementRef,
  Component,
  OnInit
} from '@angular/core';

import { MDCTextField } from '@material/textfield';

@Component({
  selector: 'input-field',
  styleUrls: ['./input-field.component.scss'],
  templateUrl: './input-field.component.html'
})
export class InputFieldComponent implements OnInit {
  _value: any = '';
  @Input()  label: string = '';
  @Input()  name: string = '';
  @Input()
  set value(value: any) {
    this._value = value || '';
  }

  @Input()  type?: string = 'text';
  @Output() onChange = new EventEmitter<Event>();
  @ViewChild('inputField') inputField: ElementRef;
  constructor(
  ) {}

  public ngOnInit() {
    const inputField = new MDCTextField(this.inputField.nativeElement);
  }

  didChange = false;

  onInputFieldChange(event: Event) {
    this.onChange.emit(event);
    this.didChange = true;
  }


}
