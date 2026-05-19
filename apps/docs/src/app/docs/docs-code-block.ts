import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

type DocsCodeBlockVariant = 'standalone' | 'embedded';

@Component({
  selector: 'docs-code-block',
  standalone: true,
  host: {
    class: 'block',
  },
  template: `
    <div
      class="bg-black text-white"
      [class.border-4]="variant() === 'standalone'"
      [class.border-(--nb-border)]="variant() === 'standalone'"
      [class.shadow-[8px_8px_0_0_var(--nb-shadow)]]="variant() === 'standalone'"
    >
      <div class="relative bg-black">
        <div
          class="flex h-11 items-center gap-2 border-b-2 border-white/20 bg-black px-4 text-xs font-black tracking-[0.12em] text-white/80 uppercase"
          style="font-family: var(--font-mono);"
        >
          <span class="inline-block size-2.5 rounded-full bg-(--nb-pink) border border-white/40"></span>
          <span class="inline-block size-2.5 rounded-full bg-(--nb-yellow) border border-white/40"></span>
          <span class="inline-block size-2.5 rounded-full bg-(--nb-mint) border border-white/40"></span>
          <span class="ml-2">{{ title() }}</span>
        </div>

        <button
          type="button"
          class="absolute top-14 right-3 z-10 border-2 border-white bg-(--nb-yellow) px-3 py-1 text-[11px] font-black tracking-wider text-black uppercase shadow-[3px_3px_0_0_rgba(255,255,255,0.4)] transition-transform hover:-translate-y-0.5 hover:-rotate-2 focus-visible:outline-(--nb-focus-ring) focus-visible:outline-offset-(--nb-focus-ring-offset)"
          style="font-family: var(--font-display);"
          (click)="copy()"
        >
          {{ copied() ? '✓ Copied' : 'Copy' }}
        </button>

        <pre
          class="m-0 overflow-x-auto whitespace-pre-wrap break-words bg-black pb-8 pl-5 pr-24 pt-7 text-xs leading-6"
          style="font-family: var(--font-mono);"
        ><code>{{ code() }}</code></pre>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsCodeBlock {
  readonly title = input('Code');
  readonly code = input.required<string>();
  readonly variant = input<DocsCodeBlockVariant>('standalone');
  protected readonly copied = signal(false);

  copy(): void {
    void navigator.clipboard.writeText(this.code());
    this.copied.set(true);

    window.setTimeout(() => this.copied.set(false), 1400);
  }
}
