import {NgModule, Renderer2, RendererFactory2} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class BackdropModule {
  backdropState = new EventEmitter<boolean>();
  private isOpen = false;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  openBackdrop() {
    this.isOpen = true;
    this.backdropState.emit(this.isOpen);
    this.toggleBodyScroll(true);
  }

  closeBackdrop() {
    this.isOpen = false;
    this.backdropState.emit(this.isOpen);
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(disable: boolean) {
    const body = this.renderer.selectRootElement('body', true);
    if (disable) {
      this.renderer.setStyle(body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(body, 'overflow');
    }
  }
}

