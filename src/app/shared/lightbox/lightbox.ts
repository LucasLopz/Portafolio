import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { ProjectImage } from '../../content/content.model';

/**
 * Muestra una imagen en grande sobre la página, con el elemento nativo <dialog>.
 *
 * showModal() le da al navegador casi todo el trabajo:
 * - deja inactivo el resto de la página y mantiene el foco dentro del diálogo;
 * - cierra con Escape;
 * - al cerrar, devuelve el foco al botón que lo abrió.
 * Este componente solo agrega el cierre al tocar fuera de la imagen.
 */
@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.css',
})
export class Lightbox {
  /** Texto del botón de cierre, en el idioma de la página. */
  readonly closeLabel = input.required<string>();

  /** La imagen que se muestra (null mientras está cerrado). */
  protected readonly image = signal<ProjectImage | null>(null);

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  open(image: ProjectImage): void {
    this.image.set(image);
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  /**
   * Se llama siempre al cerrar (botón, Escape o clic fuera). Vacía la imagen para que,
   * al abrir otra, no se vea por un instante la anterior.
   */
  protected onClosed(): void {
    this.image.set(null);
  }

  /**
   * El <dialog> ocupa toda la pantalla y la imagen está en una caja adentro.
   * Si el clic cae directamente en el <dialog> (no en la caja), fue fuera de la imagen.
   */
  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }
}
