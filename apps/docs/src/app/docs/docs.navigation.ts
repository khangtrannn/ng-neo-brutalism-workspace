export interface DocsTocItem {
  readonly label: string;
  readonly fragment: string;
}

export interface DocsNavItem {
  readonly label: string;
  readonly path?: string;
  readonly toc?: readonly DocsTocItem[];
}

export interface DocsNavGroup {
  readonly label: string;
  readonly items: readonly DocsNavItem[];
}

export const docsNavGroups: readonly DocsNavGroup[] = [
  {
    label: 'Getting started',
    items: [
      { label: 'Migrating from V3' },
      { label: 'Introduction' },
      { label: 'Installation' },
      { label: 'Resources' },
      { label: 'Figma' },
      { label: 'Changelog' },
    ],
  },
  {
    label: 'Components',
    items: [
      {
        label: 'Accordion',
        path: '/components/accordion',
        toc: [
          { label: 'Context and goals', fragment: 'context-and-goals' },
          { label: 'Tokens', fragment: 'tokens' },
          { label: 'Component rules', fragment: 'component-rules' },
          { label: 'Accessibility', fragment: 'accessibility' },
          { label: 'Content standards', fragment: 'content-standards' },
          { label: 'Anti-patterns', fragment: 'anti-patterns' },
          { label: 'QA checklist', fragment: 'qa-checklist' },
        ],
      },
      {
        label: 'Button',
        path: '/components/button',
        toc: [
          { label: 'Overview', fragment: 'overview' },
          { label: 'Preview', fragment: 'preview' },
          { label: 'Installation', fragment: 'installation' },
          { label: 'Usage', fragment: 'usage' },
          { label: 'Examples', fragment: 'examples' },
          { label: 'Variants', fragment: 'variants' },
          { label: 'Sizes', fragment: 'sizes' },
          { label: 'Full width', fragment: 'full-width' },
          { label: 'Disabled', fragment: 'disabled' },
          { label: 'Anchor usage', fragment: 'anchor-usage' },
          { label: 'API', fragment: 'api' },
        ],
      },
      { label: 'Alert Dialog' },
      { label: 'Alert' },
      { label: 'Avatar' },
      { label: 'Badge' },
      { label: 'Breadcrumb' },
      { label: 'Card' },
      { label: 'Carousel' },
      { label: 'Checkbox' },
      { label: 'Dialog' },
      { label: 'Input' },
      { label: 'Select' },
      { label: 'Tabs' },
      { label: 'Textarea' },
      { label: 'Tooltip' },
    ],
  },
];

export const docsNavItems: readonly DocsNavItem[] = docsNavGroups.flatMap(
  (group) => group.items
);

export function findDocsNavItem(path: string): DocsNavItem | undefined {
  const normalizedPath = path.split(/[?#]/, 1)[0] || '/';

  return docsNavItems.find((item) => item.path === normalizedPath);
}
