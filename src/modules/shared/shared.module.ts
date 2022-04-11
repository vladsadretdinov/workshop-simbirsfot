import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { InputSelectComponent } from './input-select/input-select.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, AsideComponent, InputSelectComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [ButtonComponent, HeaderComponent, AsideComponent, InputSelectComponent],
})
export class SharedModule {}
