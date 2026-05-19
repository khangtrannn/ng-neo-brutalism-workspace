import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { findDocsNavItem } from './docs.navigation';

const APP_TITLE = 'Ng Brutalism';

@Injectable()
export class DocsTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = getDocsPageTitle(snapshot.url);

    this.title.setTitle(
      pageTitle ? `${pageTitle} | ${APP_TITLE}` : APP_TITLE
    );
  }
}

export function getDocsPageTitle(url: string): string {
  const path = normalizePath(url);

  if (path === '/' || path === '/docs') {
    return 'Introduction';
  }

  if (path === '/showcase/portfolio') {
    return 'Portfolio Showcase';
  }

  const navItem = findDocsNavItem(path);

  if (navItem) {
    return navItem.label;
  }

  return humanizePath(path);
}

function normalizePath(url: string): string {
  const path = url.split(/[?#]/, 1)[0] || '/';

  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

function humanizePath(path: string): string {
  const segment = path.split('/').filter(Boolean).at(-1);

  if (!segment) {
    return '';
  }

  return segment
    .split('-')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');
}
