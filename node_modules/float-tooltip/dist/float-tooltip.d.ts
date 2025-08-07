import { ReactHTMLElement } from 'react';

type ConfigOptions = {
  style: {};
}

declare class Tooltip {
  constructor(element: HTMLElement, configOptions?: ConfigOptions);

  content(): string | boolean;
  content(content: HTMLElement | ReactHTMLElement<HTMLElement> | string | boolean | null): Tooltip;
  offsetX(): number | string | null;
  offsetX(offset: number | string | null): Tooltip;
  offsetY(): number | string | null;
  offsetY(offset: number | string | null): Tooltip;
}

export { Tooltip as default };
