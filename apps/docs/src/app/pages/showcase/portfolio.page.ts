import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { interval } from 'rxjs';
import {
  NbButton,
  NbDialog,
  NbDialogClose,
  NbDialogContent,
  NbDialogDescription,
  NbDialogFooter,
  NbDialogHeader,
  NbDialogTitle,
  NbDialogTrigger,
  NbInput,
  NbLabel,
  NbMarquee,
  NbMarqueeItem,
  NbTextarea,
} from '@ng-brutalism/ui';

interface Skill {
  text: string;
  icon: string;
}

interface AboutCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

interface TimelineEntry {
  id: number;
  title: string;
  date: string;
  description: string;
  locationName: string;
  popupTitle: string;
  popupDescription: string;
  x: number;
  y: number;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

const ASSET_PATH = '/showcase/portfolio';

@Component({
  selector: 'docs-portfolio-showcase-page',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    RouterLink,
    NbButton,
    NbDialog,
    NbDialogClose,
    NbDialogContent,
    NbDialogDescription,
    NbDialogFooter,
    NbDialogHeader,
    NbDialogTitle,
    NbDialogTrigger,
    NbInput,
    NbLabel,
    NbMarquee,
    NbMarqueeItem,
    NbTextarea,
  ],
  template: `
    <div
      class="portfolio-shell relative min-h-screen bg-white p-2 text-black sm:p-4 md:p-6 lg:p-8"
      [class.dark]="isDark()"
    >
      <div
        class="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        [style.background-image]="'url(' + assetPath + '/landing-dark.svg)'"
        aria-hidden="true"
      ></div>

      <div
        class="relative z-10 mx-auto min-h-[calc(100vh-1rem)] w-[1400px] max-w-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000] transition-colors duration-300 dark:bg-black dark:text-[#eeefe9] dark:shadow-[4px_4px_0px_0px_#555] sm:min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] md:border-4 md:shadow-[12px_12px_0px_0px_#000] dark:md:shadow-[12px_12px_0px_0px_#555] lg:min-h-[calc(100vh-4rem)]"
      >
        <header class="sticky top-4 z-50 w-full px-4">
          <nav
            class="mx-auto mt-2 flex h-[60px] w-full max-w-full items-center justify-between border-[3px] border-black bg-yellow-300 px-3 shadow-[8px_8px_0px_0px_#000] transition-transform duration-300 dark:border-black dark:bg-[#212121] dark:shadow-[8px_8px_0px_0px_#555] sm:mt-4 sm:h-[70px] sm:px-6 md:h-[80px]"
            aria-label="Ronit portfolio"
          >
            <a
              routerLink="/showcase/portfolio"
              fragment="home"
              class="block min-w-[80px] -rotate-2 transition-transform duration-300 hover:rotate-0 xs:min-w-[100px]"
              aria-label="Ronit Jadhav home"
            >
              <img
                class="h-[52px] w-[52px] object-contain sm:h-[64px] sm:w-[64px] md:h-[70px] md:w-[70px]"
                [src]="assetPath + '/ronitLogo.png'"
                alt="Ronit Logo"
              />
            </a>

            <div class="hidden items-center space-x-6 text-base lg:text-lg md:flex">
              @for (link of navLinks; track link.label) {
                <a
                  class="transform px-3 py-1 font-bold text-black transition-all duration-200 hover:-translate-y-1 hover:rotate-2 dark:text-white"
                  [href]="link.href"
                  [target]="link.external ? '_blank' : null"
                  [rel]="link.external ? 'noreferrer' : null"
                >
                  {{ link.label }} @if (link.external) { <span aria-hidden="true">↗</span> }
                </a>
              }

              <div class="flex items-center gap-4">
                <ng-container [ngTemplateOutlet]="contactDialog"></ng-container>
                <button
                  class="grid h-10 w-10 place-items-center border-2 border-black bg-[#76fbd9] font-black text-black shadow-[4px_4px_0px_0px_#000] transition-transform hover:-rotate-3 dark:shadow-[4px_4px_0px_0px_#555]"
                  type="button"
                  (click)="toggleTheme()"
                  [attr.aria-pressed]="isDark()"
                  aria-label="Toggle theme"
                >
                  {{ isDark() ? '☀' : '☾' }}
                </button>
              </div>
            </div>

            <div class="flex items-center gap-4 md:hidden">
              <button
                class="grid h-10 w-10 place-items-center border-2 border-black bg-[#76fbd9] font-black text-black shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#555]"
                type="button"
                (click)="toggleTheme()"
                [attr.aria-pressed]="isDark()"
                aria-label="Toggle theme"
              >
                {{ isDark() ? '☀' : '☾' }}
              </button>
              <button
                class="border-2 border-black bg-[#76fbd9] p-2 shadow-[4px_4px_0px_0px_#000] transition-transform hover:-rotate-3 dark:shadow-[4px_4px_0px_0px_#555]"
                type="button"
                (click)="toggleMenu()"
                [attr.aria-expanded]="menuOpen()"
                aria-label="Open navigation"
              >
                <span class="mb-1 block h-0.5 w-6 bg-black"></span>
                <span class="mb-1 block h-0.5 w-6 bg-black"></span>
                <span class="block h-0.5 w-6 bg-black"></span>
              </button>
            </div>
          </nav>

          @if (menuOpen()) {
            <div
              class="fixed left-0 top-[90px] z-50 w-full px-2 sm:top-[110px] sm:px-4 md:hidden"
            >
              <div
                class="w-full border-[3px] border-black bg-white p-4 shadow-[8px_8px_0px_0px_#000] dark:bg-[#212121] dark:shadow-[8px_8px_0px_0px_#555]"
              >
                <div class="flex flex-col space-y-3">
                  @for (link of navLinks; track link.label) {
                    <a
                      class="border-2 border-black bg-yellow-300 p-2 text-center text-lg font-bold text-black shadow-[4px_4px_0px_0px_#000] transition-transform hover:rotate-2 dark:bg-[#212121] dark:text-white dark:shadow-[4px_4px_0px_0px_#555]"
                      [href]="link.href"
                      [target]="link.external ? '_blank' : null"
                      [rel]="link.external ? 'noreferrer' : null"
                      (click)="closeMenu()"
                    >
                      {{ link.label }} @if (link.external) { <span aria-hidden="true">↗</span> }
                    </a>
                  }
                </div>
                <div class="mt-4 p-2">
                  <ng-container [ngTemplateOutlet]="contactDialog"></ng-container>
                </div>
              </div>
            </div>
          }
        </header>

        <main class="flex min-h-full flex-col">
          <section
            id="home"
            class="portfolio-grid-section relative flex h-screen max-h-[900px] min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-white pb-14 dark:bg-black sm:min-h-[600px] sm:pb-16 md:pb-20"
          >
            <div class="portfolio-grid-bg absolute inset-0"></div>
            <div class="portfolio-radial absolute inset-0 dark:bg-black"></div>

            <div
              class="relative z-10 mx-auto flex flex-1 flex-col items-center justify-between px-3 py-2 text-left sm:px-5 sm:py-4 md:py-8 lg:flex-row lg:py-4"
            >
              <div
                class="order-2 flex w-full flex-col items-center lg:order-1 lg:w-1/2 lg:items-start lg:pl-8"
              >
                <p
                  class="relative z-10 text-xl font-bold text-[#2b55ff] dark:text-[#4b6fff] sm:text-2xl md:text-3xl"
                  aria-live="polite"
                >
                  {{ greeting() }}
                </p>

                <h1
                  class="mt-2 text-center font-heading text-xl font-black leading-tight sm:mt-3 sm:text-2xl md:mt-5 md:text-3xl lg:text-left lg:text-5xl"
                >
                  I'm Ronit Jadhav. <span aria-hidden="true">👋</span>
                </h1>

                <p
                  class="my-3 max-w-2xl text-center text-sm font-normal leading-relaxed sm:my-5 sm:text-base md:my-6 md:text-lg lg:my-8 lg:max-w-xl lg:text-left lg:text-xl"
                >
                  Based in Germany, I'm a Geospatial Developer and a Software
                  Engineer. I love to work with maps, data, and code. I'm
                  passionate about open-source, web technologies, and building
                  cool stuff.
                </p>

                <div class="mb-6 flex w-full flex-col items-center lg:items-start md:mb-8">
                  <div class="mb-4 flex space-x-4 sm:mb-5 sm:space-x-6 md:mb-6">
                    <a
                      class="portfolio-social"
                      href="https://github.com/ronitjadhav"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      GH
                    </a>
                    <a
                      class="portfolio-social"
                      href="https://www.linkedin.com/in/ronitjadhav/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      IN
                    </a>
                  </div>
                </div>
              </div>

              <div
                class="order-1 mt-2 flex w-full justify-center lg:order-2 lg:mt-0 lg:w-1/2 lg:justify-end"
              >
                <img
                  class="h-auto w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[450px]"
                  [src]="assetPath + '/ronit.png'"
                  alt="Ronit Jadhav"
                />
              </div>
            </div>

            <div class="absolute bottom-0 left-0 z-0 w-full">
              <nb-marquee
                class="block border-y-2 border-black bg-white py-2 font-base dark:border-[#555] dark:bg-[#212121] sm:py-3 lg:py-5"
                duration="18s"
              >
                @for (skill of skills; track skill.text) {
                  <nb-marquee-item>
                    <span class="mx-4 flex items-center sm:mx-6 lg:mx-8">
                      <span class="mr-2 text-2xl sm:mr-3 sm:text-3xl lg:text-4xl">
                        {{ skill.icon }}
                      </span>
                      <span class="font-heading text-lg sm:text-xl lg:text-2xl">
                        {{ skill.text }}
                      </span>
                    </span>
                  </nb-marquee-item>
                }
              </nb-marquee>
            </div>
          </section>

          <section id="journey" class="portfolio-grid-section relative bg-white p-2 py-8 dark:bg-black sm:p-4 sm:py-12 md:p-6 md:py-16 lg:p-8">
            <div class="portfolio-grid-bg absolute inset-0"></div>
            <div class="portfolio-radial absolute inset-0 dark:bg-black"></div>
            <div class="relative z-10 mx-auto max-w-full px-2 sm:px-5">
              <div class="portfolio-section-title mb-4 sm:mb-6 md:mb-10">
                <h2 class="text-center font-heading text-xl font-black text-black dark:text-[#eeefe9] sm:text-2xl md:text-4xl lg:text-5xl">
                  My Journey Through Time &amp; Space <span aria-hidden="true">🗺️</span>
                </h2>
              </div>

              <div class="relative h-[400px] overflow-hidden rounded-md border-2 border-black bg-[#dbeafe] shadow-[4px_4px_0px_0px_#000] dark:border-black dark:bg-[#212121] dark:shadow-[4px_4px_0px_0px_#555] sm:h-[500px] sm:border-4 sm:shadow-[8px_8px_0px_0px_#000] md:h-[600px] lg:h-[700px] xl:h-[750px]">
                <div class="portfolio-map absolute inset-0"></div>

                <aside
                  class="absolute left-0 top-0 z-20 flex h-full w-full flex-col overflow-hidden border-r-2 border-black bg-white/95 backdrop-blur-md dark:bg-[#212121]/95 sm:w-[380px] sm:border-r-4 md:w-[420px]"
                >
                  <div class="flex flex-none items-center justify-between border-b-2 border-black bg-white p-3 dark:bg-[#212121] sm:border-b-4 sm:p-4">
                    <h3 class="text-lg font-black text-black dark:text-white sm:text-xl">
                      Journey Timeline
                    </h3>
                  </div>

                  <div class="relative flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
                    <div class="absolute bottom-6 left-7 top-6 w-1 bg-black dark:bg-white sm:left-9"></div>
                    @for (entry of timeline; track entry.id; let index = $index) {
                      <button
                        class="relative w-full cursor-pointer rounded-md border-l-4 border-transparent py-3 pl-10 pr-2 text-left transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600 sm:py-4 sm:pl-14 sm:pr-4 md:pl-16"
                        type="button"
                        [class.bg-yellow-100]="activeJourney() === index"
                        [class.dark:bg-gray-700]="activeJourney() === index"
                        (click)="setActiveJourney(index)"
                      >
                        <span class="absolute left-4 top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-black dark:bg-white sm:left-6"></span>
                        <span class="block text-base font-black sm:text-lg md:text-xl">
                          {{ entry.title }}
                        </span>
                        <span class="block font-mono text-xs font-bold text-gray-600 dark:text-gray-400 sm:text-sm">
                          {{ entry.date }}
                        </span>
                        <span class="mt-1.5 block text-sm leading-relaxed sm:mt-2 sm:text-base">
                          {{ entry.description }}
                        </span>
                        <span class="mt-2 flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300 sm:mt-3 sm:text-sm">
                          <span aria-hidden="true">📍</span>{{ entry.locationName }}
                        </span>
                      </button>
                    }
                  </div>
                </aside>

                <div class="absolute right-4 top-4 z-10 max-w-[200px] rounded-md border-2 border-black bg-white/80 p-2 px-3 text-xs font-medium text-black shadow-md backdrop-blur-sm dark:bg-black/80 dark:text-white sm:max-w-xs sm:text-sm md:right-20 lg:right-24">
                  Click markers or timeline items to explore!
                </div>

                @for (entry of timeline; track entry.id; let index = $index) {
                  <button
                    class="portfolio-marker"
                    type="button"
                    [style.left.%]="entry.x"
                    [style.top.%]="entry.y"
                    [class.is-active]="activeJourney() === index"
                    (click)="setActiveJourney(index)"
                    [attr.aria-label]="'Show ' + entry.popupTitle"
                  >
                    <span></span>
                  </button>
                }

                <div
                  class="portfolio-popup"
                  [style.left.%]="timeline[activeJourney()].x"
                  [style.top.%]="timeline[activeJourney()].y"
                >
                  <h3>{{ timeline[activeJourney()].popupTitle }}</h3>
                  <p>{{ timeline[activeJourney()].popupDescription }}</p>
                </div>

                <div class="absolute bottom-2 right-2 z-10 flex flex-col gap-1.5 sm:bottom-4 sm:right-4 sm:gap-2 lg:top-4">
                  <button class="portfolio-map-control" type="button" aria-label="Zoom in">+</button>
                  <button class="portfolio-map-control" type="button" aria-label="Zoom out">−</button>
                  <button class="portfolio-map-control text-base" type="button" aria-label="Reset map">⌂</button>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" class="portfolio-grid-section relative bg-white p-3 py-8 dark:bg-black sm:p-5 sm:py-12 md:p-8 md:py-16">
            <div class="portfolio-grid-bg absolute inset-0"></div>
            <div class="portfolio-radial absolute inset-0 dark:bg-black"></div>
            <div class="relative z-10 mx-auto max-w-full px-2 sm:px-5">
              <div class="portfolio-section-title mb-6 sm:mb-10">
                <h2 class="text-center font-heading text-2xl font-black text-black dark:text-[#eeefe9] sm:text-3xl md:text-4xl lg:text-5xl">
                  Projects I've Worked On <span aria-hidden="true">🚀</span>
                </h2>
              </div>

              <div class="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                @for (project of projects; track project.title) {
                  <article class="portfolio-project-card group">
                    <div class="relative mb-3 h-36 w-full overflow-hidden rounded-lg sm:mb-4 sm:h-44 md:h-48">
                      <img
                        class="h-full w-full object-cover transition-transform group-hover:scale-110"
                        [src]="assetPath + '/' + project.image"
                        [alt]="project.title"
                      />
                    </div>

                    <h3 class="mb-2 text-xl font-bold sm:text-2xl">
                      {{ project.title }}
                    </h3>
                    <p class="mb-3 text-sm text-black dark:text-[#eeefe9] sm:mb-4 sm:text-base">
                      {{ project.description }}
                    </p>

                    <div class="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                      @for (tech of project.tech; track tech) {
                        <span class="border-2 border-black bg-yellow-300 px-2 py-0.5 text-xs font-semibold text-black sm:px-3 sm:py-1 sm:text-sm">
                          {{ tech }}
                        </span>
                      }
                    </div>

                    <div class="flex flex-wrap gap-2 sm:gap-4">
                      <a class="portfolio-project-link bg-blue-400" [href]="project.github" target="_blank" rel="noreferrer">
                        <span aria-hidden="true">⌘</span> Code
                      </a>
                      <a class="portfolio-project-link bg-green-400" [href]="project.live" target="_blank" rel="noreferrer">
                        <span aria-hidden="true">↗</span> Live Demo
                      </a>
                    </div>
                  </article>
                }
              </div>
            </div>
          </section>

          <footer class="border-t-4 border-black bg-white px-5 py-8 dark:bg-[#212121]">
            <div class="mx-auto flex max-w-full flex-col gap-4 font-bold sm:flex-row sm:items-center sm:justify-between">
              <p>Ronit Jadhav | Built with ❤ &amp; ☕</p>
              <p class="border-2 border-black bg-yellow-300 px-3 py-1 font-mono text-sm text-black shadow-[4px_4px_0px_0px_#000]">
                &lt;/&gt; with Next.js + Tailwind
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>

    <ng-template #contactDialog>
      <nb-dialog>
        <button
          nbButton
          nbDialogTrigger
          class="h-10 font-heading text-base md:h-12 md:text-lg lg:h-14 lg:text-xl"
        >
          Get in Touch!
        </button>
        <nb-dialog-content>
          <nb-dialog-header>
            <nb-dialog-title>Get in Touch</nb-dialog-title>
            <nb-dialog-description>
              Please fill out the form below to get in touch with me.
            </nb-dialog-description>
          </nb-dialog-header>

          <form
            id="portfolio-contact"
            class="grid gap-4 px-6 py-5"
            (submit)="submitContact($event)"
          >
            <div class="grid gap-2">
              <label nbLabel for="portfolio-name">Name</label>
              <input nbInput id="portfolio-name" name="name" placeholder="Name" />
            </div>
            <div class="grid gap-2">
              <label nbLabel for="portfolio-email">Email</label>
              <input nbInput id="portfolio-email" name="email" type="email" placeholder="Email" />
            </div>
            <div class="grid gap-2">
              <label nbLabel for="portfolio-message">Message</label>
              <textarea nbTextarea id="portfolio-message" name="message" placeholder="Message"></textarea>
            </div>

            @if (sent()) {
              <p class="border-2 border-black bg-[#76fbd9] px-3 py-2 text-sm font-bold text-black shadow-[3px_3px_0_0_#000]" role="status">
                Message staged. The demo flow is working.
              </p>
            }
          </form>

          <nb-dialog-footer>
            <button nbButton variant="neutral" nbDialogClose>Close</button>
            <button nbButton type="submit" form="portfolio-contact">Send</button>
          </nb-dialog-footer>
        </nb-dialog-content>
      </nb-dialog>
    </ng-template>
  `,
  styles: `
    :host {
      display: block;
    }

    .portfolio-shell {
      --portfolio-dark-bg: #212121;
      --portfolio-dark-text: #eeefe9;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .portfolio-grid-bg {
      background-size: 20px 20px;
      background-image:
        linear-gradient(to right, #e4e4e7 1px, transparent 1px),
        linear-gradient(to bottom, #e4e4e7 1px, transparent 1px);
    }

    .dark .portfolio-grid-bg {
      background-image:
        linear-gradient(to right, #262626 1px, transparent 1px),
        linear-gradient(to bottom, #262626 1px, transparent 1px);
    }

    .portfolio-radial {
      pointer-events: none;
      background: white;
      mask-image: radial-gradient(ellipse at center, transparent 20%, black);
    }

    .portfolio-social {
      display: grid;
      width: clamp(2rem, 5vw, 3rem);
      height: clamp(2rem, 5vw, 3rem);
      place-items: center;
      color: #1f2937;
      font-family: var(--font-heading);
      font-weight: 900;
      transition:
        color 180ms ease,
        transform 180ms ease;
    }

    .portfolio-social:hover {
      color: #2b55ff;
      transform: scale(1.1) rotate(-8deg);
    }

    .dark .portfolio-social {
      color: white;
    }

    .portfolio-info-card {
      position: relative;
      z-index: 10;
      display: flex;
      width: 100%;
      min-height: 200px;
      max-width: 720px;
      flex-direction: column-reverse;
      align-items: center;
      gap: 1rem;
      border: 2px solid #0f172a;
      border-radius: 0.5rem;
      background: white;
      padding: 1.25rem 1rem;
      box-shadow: 4px 4px 0 0 #000;
      transition:
        transform 220ms ease,
        box-shadow 220ms ease;
    }

    .portfolio-info-card:hover {
      transform: scale(1.02);
    }

    .dark .portfolio-info-card {
      border-color: #6b7280;
      background: #212121;
      box-shadow: 4px 4px 0 0 #6b7280;
    }

    .portfolio-section-title {
      width: 100%;
      border: 2px solid #000;
      background: white;
      padding: 0.75rem;
      box-shadow: 4px 4px 0 0 #000;
      transition:
        transform 220ms ease,
        box-shadow 220ms ease;
    }

    .portfolio-section-title:hover {
      transform: translateY(-0.25rem);
      box-shadow: 12px 12px 0 0 #000;
    }

    .dark .portfolio-section-title {
      background: #212121;
      box-shadow: 4px 4px 0 0 #555;
    }

    .dark .portfolio-section-title:hover {
      box-shadow: 12px 12px 0 0 #555;
    }

    .portfolio-map {
      background-color: #c7d2fe;
      background-image:
        linear-gradient(35deg, transparent 52%, rgba(59, 130, 246, 0.28) 53%, rgba(59, 130, 246, 0.28) 55%, transparent 56%),
        radial-gradient(circle at 54% 42%, rgba(34, 197, 94, 0.35) 0 7%, transparent 8%),
        radial-gradient(circle at 65% 52%, rgba(34, 197, 94, 0.35) 0 8%, transparent 9%),
        radial-gradient(circle at 80% 68%, rgba(34, 197, 94, 0.28) 0 10%, transparent 11%),
        linear-gradient(to right, rgba(255, 255, 255, 0.35) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
      background-size:
        100% 100%,
        100% 100%,
        100% 100%,
        100% 100%,
        64px 64px,
        64px 64px;
    }

    .dark .portfolio-map {
      background-color: #1f2937;
      filter: saturate(0.8);
    }

    .portfolio-marker {
      position: absolute;
      z-index: 12;
      width: 36px;
      height: 36px;
      transform: translate(-50%, -50%);
    }

    .portfolio-marker span {
      display: block;
      width: 28px;
      height: 28px;
      border: 2px solid #000;
      border-radius: 999px;
      background: #ffd700;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.3);
    }

    .portfolio-marker span::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      margin: 7px;
      border-radius: 999px;
      background: #000;
    }

    .portfolio-marker.is-active span {
      transform: scale(1.18);
    }

    .portfolio-popup {
      position: absolute;
      z-index: 15;
      min-width: 180px;
      max-width: 250px;
      transform: translate(-50%, calc(-100% - 24px));
      border: 2px solid #000;
      border-radius: 0.5rem;
      background: white;
      padding: 0.5rem;
      box-shadow: 4px 4px 0 0 #000;
    }

    .portfolio-popup h3 {
      margin-bottom: 0.25rem;
      border-bottom: 2px solid #000;
      padding-bottom: 0.25rem;
      font-size: 1rem;
      font-weight: 900;
      color: #000;
    }

    .portfolio-popup p {
      font-size: 0.875rem;
      line-height: 1.45;
      color: #374151;
    }

    .dark .portfolio-popup {
      background: #212121;
      box-shadow: 4px 4px 0 0 rgba(255, 255, 255, 0.3);
    }

    .dark .portfolio-popup h3,
    .dark .portfolio-popup p {
      color: white;
    }

    .portfolio-map-control {
      display: grid;
      width: 2.25rem;
      height: 2.25rem;
      place-items: center;
      border: 2px solid #000;
      border-radius: 0.5rem;
      background: white;
      color: #000;
      font-size: 1.125rem;
      font-weight: 900;
      box-shadow: 2px 2px 0 0 #000;
      transition:
        transform 150ms ease,
        box-shadow 150ms ease;
    }

    .portfolio-map-control:hover {
      transform: translate(2px, 2px);
      box-shadow: none;
    }

    .dark .portfolio-map-control {
      background: #212121;
      color: #eeefe9;
      border-color: white;
      box-shadow: 2px 2px 0 0 rgba(255, 255, 255, 0.3);
    }

    .portfolio-project-card {
      border: 3px solid #000;
      border-radius: 0.5rem;
      background: white;
      padding: 0.75rem;
      color: #000;
      box-shadow: 8px 8px 0 0 #000;
      transition: transform 220ms ease;
    }

    .portfolio-project-card:hover {
      transform: scale(1.05);
    }

    .dark .portfolio-project-card {
      background: #212121;
      color: #eeefe9;
      box-shadow: 8px 8px 0 0 #555;
    }

    .portfolio-project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
      border: 2px solid #000;
      padding: 0.375rem 0.75rem;
      color: #000;
      font-size: 0.875rem;
      font-weight: 700;
      box-shadow: 4px 4px 0 0 #000;
      transition:
        transform 150ms ease,
        box-shadow 150ms ease;
    }

    .portfolio-project-link:hover {
      transform: translateY(-0.25rem);
      box-shadow: 4px 8px 0 0 #000;
    }

    @media (min-width: 640px) {
      .portfolio-info-card {
        min-height: 250px;
        gap: 1.5rem;
        padding: 1.5rem;
      }

      .portfolio-section-title {
        border-width: 4px;
        padding: 1rem;
        box-shadow: 8px 8px 0 0 #000;
      }

      .dark .portfolio-section-title {
        box-shadow: 8px 8px 0 0 #555;
      }

      .portfolio-map-control {
        width: 2.5rem;
        height: 2.5rem;
        border-width: 4px;
        font-size: 1.25rem;
        box-shadow: 4px 4px 0 0 #000;
      }

      .portfolio-popup {
        min-width: 250px;
        max-width: 350px;
        border-width: 4px;
        padding: 1rem;
      }

      .portfolio-popup h3 {
        margin-bottom: 0.5rem;
        border-bottom-width: 4px;
        padding-bottom: 0.5rem;
        font-size: 1.25rem;
      }

      .portfolio-popup p {
        font-size: 1rem;
      }
    }

    @media (min-width: 768px) {
      .portfolio-info-card {
        min-height: 300px;
        flex-direction: row;
        gap: 3rem;
        padding: 2rem 1.5rem;
      }

      .portfolio-project-card {
        padding: 1.5rem;
      }
    }

    @media (max-width: 767px) {
      .portfolio-popup,
      .portfolio-marker {
        display: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioShowcasePageComponent {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly assetPath = ASSET_PATH;
  protected readonly isDark = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly sent = signal(false);
  protected readonly activeJourney = signal(0);

  private readonly greetings = ['Hello!', 'Hola!', 'Bonjour!', 'Namaste!'];
  private greetingIndex = 0;
  protected readonly greeting = signal(this.greetings[0]);

  constructor() {
    afterNextRender(() => {
      interval(1500)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.greetingIndex =
            (this.greetingIndex + 1) % this.greetings.length;
          this.greeting.set(this.greetings[this.greetingIndex]);
        });
    });
  }

  protected readonly navLinks = [
    { href: '#home', label: 'Home', external: false },
    { href: '#journey', label: 'Journey', external: false },
    { href: '#projects', label: 'Projects', external: false },
    { href: 'https://dev.to/ronitjadhav', label: 'Blogs', external: true },
  ];

  protected readonly skills: Skill[] = [
    { text: 'ArcGIS', icon: '◉' },
    { text: 'QGIS', icon: '◆' },
    { text: 'Docker', icon: '▣' },
    { text: 'OpenLayers', icon: '◎' },
    { text: 'Leaflet', icon: '◇' },
    { text: 'Kubernetes', icon: '✦' },
    { text: 'Argo CD', icon: '△' },
    { text: 'Apache Airflow', icon: '↻' },
    { text: 'GeoServer', icon: '▤' },
    { text: 'Python', icon: '⌁' },
    { text: 'JavaScript', icon: 'JS' },
    { text: 'TypeScript', icon: 'TS' },
    { text: 'Angular', icon: 'A' },
    { text: 'PostGIS', icon: 'DB' },
    { text: 'Version Control', icon: 'Git' },
  ];

  protected readonly aboutCards: AboutCard[] = [
    {
      title: 'About Me',
      description:
        "I'm currently working as a Geospatial Software Engineer at Camptocamp, where I specialize in geospatial software development.",
      image: 'Character1.svg',
      imageAlt: 'Character1',
      imagePosition: 'right',
    },
    {
      title: 'Geospatial Development',
      description:
        'I thrive on continuously learning various geospatial technologies, from GIS software to spatial databases, to shape ideas into functional applications.',
      image: 'Character2.svg',
      imageAlt: 'Character2',
      imagePosition: 'left',
    },
    {
      title: 'Interest in Technology',
      description:
        'Technology has fascinated me since I was young, especially the joy of building things. Combining tech with hands-on creation has always felt just right for me.',
      image: 'Character3.svg',
      imageAlt: 'Character3',
      imagePosition: 'right',
    },
    {
      title: 'Other Hobbies',
      description:
        'Here are some of my other passions: I like to dance, play chess, love watching F1, and am a Potterhead.',
      image: 'Character4.svg',
      imageAlt: 'Character4',
      imagePosition: 'left',
    },
  ];

  protected readonly timeline: TimelineEntry[] = [
    {
      id: 1,
      title: 'Software Engineer @ Camptocamp',
      date: 'Oct 2023 - Present',
      description:
        'Kicked off my journey into the open-source geospatial realm at Camptocamp, working with QGIS, Geonetwork-UI, developing custom GIS dashboards, and contributing to QGIS plugins. Diving into Docker, web GIS, and everything open-source!',
      locationName: 'Berlin, Germany (Hybrid)',
      popupTitle: 'Camptocamp',
      popupDescription:
        'Became part of the open-source geospatial world, building geospatial solutions and exploring the power of QGIS.',
      x: 56,
      y: 35,
    },
    {
      id: 2,
      title:
        'Software Engineering for Industrial Applications @ Hochschule Hof',
      date: '2022 - 2024',
      description:
        'Diving deep into advanced programming, software engineering, and IoT, while focusing on Industry 4.0. Gaining expertise in applied cloud computing, non-relational databases, and spatial technologies to bridge software and the real world.',
      locationName: 'Hof, Germany',
      popupTitle: 'Hochschule Hof',
      popupDescription:
        'Expanding my skillset in software engineering, focusing on Industry 4.0, cloud computing, and real-world applications.',
      x: 54,
      y: 42,
    },
    {
      id: 3,
      title: 'GIS Developer @ Gistec',
      date: '2019 - 2022',
      description:
        'Joined Gistec to create custom geoprocessing tools, work with ArcGIS Enterprise, and develop web mapping apps with Esri tech. Basically, a geospatial problem-solver.',
      locationName: 'Hyderabad, India',
      popupTitle: 'Gistec',
      popupDescription:
        'Built mapping tools and apps while mastering Python (ArcPy), ArcGIS Server, and the Esri stack.',
      x: 72,
      y: 62,
    },
    {
      id: 4,
      title: 'Student Intern @ University of Cologne',
      date: '2019 - 2019',
      description:
        'Interned at the University of Cologne, applying GIS and spatial analysis to hydrological modeling with ArcSWAT for the Mula-Mutha river. Automated tasks using Python and supported geospatial research for water resources.',
      locationName: 'Cologne, Germany',
      popupTitle: 'University of Cologne',
      popupDescription:
        "Leveraged GIS and spatial data to contribute to water flux modeling and the SWAT tool's application in India.",
      x: 52,
      y: 40,
    },
    {
      id: 5,
      title: 'M.Sc. in Geoinformatics: The Spatial Awakening',
      date: '2017 - 2019',
      description:
        'Learned to wield GIS, remote sensing, and code like a spatial wizard. Maps and code - what could go wrong?',
      locationName: 'Pune, India',
      popupTitle: 'BVIEER',
      popupDescription:
        'Where I discovered that geography is more than just knowing where places are.',
      x: 70,
      y: 66,
    },
  ];

  protected readonly projects: Project[] = [
    {
      title: 'Digipin',
      description:
        'Search for the DIGIPIN for your location. This app demonstrates how to use the Digital Postal Index Number (DIGIPIN) by the Department of Posts in India, aiming to simplify geo-coded addressing for public and private services.',
      tech: ['Openlayers', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/ronitjadhav/digipin-openlayers',
      live: 'https://digipin.maplabs.tech',
      image: 'digipin.jpeg',
    },
    {
      title: 'QGIS Hub Plugin',
      description:
        'Developed at Camptocamp with help from Ismail Sunni, this plugin allows QGIS users to easily browse and add resources from the QGIS Hub directly into their projects. It supports grid and list views, search, and filtering by resource type.',
      tech: ['Python', 'Qt', 'QGIS'],
      github: 'https://github.com/qgis/QGIS-Hub-Plugin',
      live: 'https://plugins.qgis.org/plugins/qgis_hub_plugin/',
      image: 'QGIS-Banner.jpg',
    },
    {
      title: 'Openlayers Benchmark',
      description:
        'Developed at Camptocamp as part of my internship, this project helps to benchmark the performance of WebGL and Canvas rendering in Openlayers. It includes a variety of tests and visualizations to compare the rendering speed of different layers.',
      tech: ['Openlayers', 'TypeScript'],
      github: 'https://github.com/openlayers/bench',
      live: 'https://openlayers.org/bench/',
      image: 'olBench.png',
    },
  ];

  protected toggleTheme(): void {
    this.isDark.update((value) => !value);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected setActiveJourney(index: number): void {
    this.activeJourney.set(index);
  }

  protected submitContact(event: SubmitEvent): void {
    event.preventDefault();
    this.sent.set(true);
  }
}
