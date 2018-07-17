import {
  Input, Output, EventEmitter,
  ViewChild, ElementRef,
  Component,
  OnInit
} from '@angular/core';

import { MDCRipple } from '@material/ripple';

@Component({
  selector: 'md-button',
  styleUrls: ['./button.component.scss'],
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input()  type: string = 'button';
  @Output() onClick = new EventEmitter<Event>();
  @ViewChild('button') button: ElementRef;
  constructor(
  ) {}

  public ngOnInit() {
    const ripple = new MDCRipple(this.button.nativeElement);
  }

  didClick = false;

  onButtonClick(event: Event) {
    this.onClick.emit(event);
    this.didClick = true;
  }


}
