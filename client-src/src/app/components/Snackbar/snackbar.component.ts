import {
  Input, Output, EventEmitter,
  ViewChild, ElementRef,
  Component,
  OnInit
} from '@angular/core';

import { MDCSnackbar } from '@material/snackbar';

@Component({
  selector: 'md-snackbar',
  styleUrls: ['./snackbar.component.scss'],
  templateUrl: './snackbar.component.html'
})
export class SnackbarComponent implements OnInit {
  @Input()  message: string = 'button';
  @ViewChild('snackbar') snackbar: ElementRef;
  constructor(
  ) {}

  public ngOnInit() {
    const snackbar = new MDCSnackbar(this.snackbar.nativeElement);
    const dataObj = {
      message: 'Example',
      actionText: 'Close',
    };

    snackbar.show(dataObj);
  }
}
