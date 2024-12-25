import {Injectable, Renderer2, RendererFactory2, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackdropService {
  backdropState = signal(false);
  private isOpen = false;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  openBackdrop() {
    this.isOpen = true;
    this.backdropState.set(this.isOpen);
    this.toggleBodyScroll(true);
  }

  closeBackdrop() {
    this.isOpen = false;
    this.backdropState.set(this.isOpen);
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
