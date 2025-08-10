/**
 * @file My markdown parsing plugin.
 * 
 * @note This implementation contains purpose-specific hardcoding
 * and will not maintain backward compatibility. DO NOT depend on
 * this module externally.
 */

import unifiedPlugin from "./unified.ts";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from 'remark-emoji';
import remarkFetchToc from "../unified/fetch-toc.ts";
import remarkGenPreview from "../unified/gen-prev.ts";
import remarkRehype from "remark-rehype";
import rehypeMathjax from 'rehype-mathjax';
import rehypeStringify from "rehype-stringify";
import rehypePrism from 'rehype-prism-plus/all'

export default function () {
  return (site: Lume.Site) => {
    const processor =
      unified()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkGfm)
        .use(remarkEmoji)
        .use(remarkFetchToc)
        .use(remarkGenPreview)
        // TODO: Add custom implementation for reference
        .use(remarkRehype, {
          allowDangerousHtml: true,
        })
        .use(rehypeMathjax)
        .use(rehypePrism)
        .use(rehypeStringify, {
          allowDangerousHtml: true,
        })
    site.use(unifiedPlugin({
      extensions: [".md"],
      processor
    }));
  }
}