import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, AsideComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, HeaderComponent, AsideComponent],
})
export class SharedModule {}
