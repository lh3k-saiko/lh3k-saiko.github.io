/**
 * A simple hook of using unified to parse files.
 */

import loader from "lume/core/loaders/text.ts"
import type { Processor } from "unified"

// deno-lint-ignore no-explicit-any
type Unified = Processor<any, any, any, any, string>;

export interface Options {
  extensions: string[],
  processor: Unified,
}

export class UnifiedEngine implements Lume.Engine {
  unified: Unified

  constructor(processor: Unified) {
    this.unified = processor;
  }

  deleteCache(): void {}

  async render(
    content: string,
    data?: Record<string, unknown>,
    filename?: string
  ) {
    const page = data?.page as Lume.Page | undefined;
    return (await this.unified.process({
      value: content,
      data: page?.data,
      path: filename,
    })).toString();
  }

  addHelper(): void {}
}

export default function (options: Options) {
  return (site: Lume.Site) => {
    site.loadPages(options.extensions, {
      loader,
      engine: new UnifiedEngine(options.processor)
    })
  }
}
