import {
  Input, Output, EventEmitter,
  ViewChild, ElementRef,
  Component,
  OnInit
} from '@angular/core';

import { MDCSelect } from '@material/select';

@Component({
  selector: 'md-select',
  styleUrls: ['./select.component.scss'],
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {
  @Input()  label: string = '';
  @Input()  name: string = '';
  @Input()  options: any[] = [];
  @Input()  value: any = undefined;
  @Output() onChange = new EventEmitter<Event>();
  @ViewChild('select') select: ElementRef;
  constructor(
  ) {}

  public ngOnInit() {
    const select = new MDCSelect(this.select.nativeElement);
  }

  didChange = false;

  onInputFieldChange(event: Event) {
    this.onChange.emit(event);
    this.didChange = true;
  }


}
