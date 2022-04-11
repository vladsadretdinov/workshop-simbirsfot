import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
  ChangeDetectionStrategy,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { UntilDestroy } from '@ngneat/until-destroy';
import { fromEvent, Subscription } from 'rxjs';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSelectComponent implements OnInit, OnChanges {
  @Input() label: string | null = '';

  @Input() placeholder: string = '';

  @Input() options: string[] | null = [];

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  @ViewChild('input__eraser') input__eraser!: ElementRef<HTMLElement>;

  @ViewChild('input__list') input__list!: ElementRef<HTMLElement>;

  static num = 0;

  id: string = '';

  inputControl = new FormControl('');

  renderedOptions: string[] = [];

  outsideClickSubscription!: Subscription;

  inputEraserViewSubscription!: Subscription;

  optionsViewSubscription!: Subscription;

  constructor() {
    this.id = `select-input-${InputSelectComponent.num++}`;
  }

  ngOnInit() {
    this.inputEraserViewSubscription = this.inputControl.valueChanges.pipe(filter(value => value !== '')).subscribe((value: string) => {
      this.valueChange.emit(value);
      this.input__eraser.nativeElement.classList.add('input__eraser_enabled');
    });

    this.optionsViewSubscription = this.inputControl.valueChanges.subscribe((newValue: string) => {
      this.renderedOptions = this.options ? this.options.filter(option => option.toLowerCase().includes(newValue.toLowerCase())) : [];

      if (this.renderedOptions.length === 0) {
        this.input__list.nativeElement.classList.remove('input__list_opened');
      } else {
        this.input__list.nativeElement.classList.add('input__list_opened');
      }
    });

    this.outsideClickSubscription = fromEvent(document, 'click')
      .pipe(filter(event => event.target !== this.input.nativeElement && event.target !== this.input__list.nativeElement))
      .subscribe(() => {
        this.input__list.nativeElement.classList.remove('input__list_opened');
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes) {
      this.renderedOptions = [...(changes['options'].currentValue as string[])];
    }
  }

  clickInput() {
    if (this.renderedOptions.length > 0) {
      this.input__list.nativeElement.classList.add('input__list_opened');
    }
  }

  clearInput() {
    this.inputControl.setValue('');
    this.input__eraser.nativeElement.classList.remove('input__eraser_enabled');
  }

  setInput(event: Event) {
    this.inputControl.setValue((event.target as HTMLInputElement).title);
    this.input__list.nativeElement.classList.remove('input__list_opened');
  }
}
