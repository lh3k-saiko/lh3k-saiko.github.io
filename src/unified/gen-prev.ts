import type { Root } from "mdast";
import type { VFile } from "vfile";
import type { Plugin } from "unified";

import { toString as mdastToString } from "mdast-util-to-string"
import { EXIT, CONTINUE, visit } from "unist-util-visit";

export interface Options {
  length: number,
  more: string,
}

export const defaultOptions = { length: 120, more: "..." };

const remarkGenPreview: Plugin<[], Root> = (userOptions: Partial<Options> = {}) => {
  const options: Options = Object.assign({}, defaultOptions, userOptions);
  return function (tree: Root, file: VFile) {
    let full = "";
    visit(tree, (node) => {
      if(node.type == "paragraph") full += mdastToString(node) + "\n";
      return full.length < options.length ? CONTINUE : EXIT;
    })
    mdastToString(tree);
    if (full.length <= options.length) file.data.preview = full;
    else file.data.preview = full.substring(0, options.length - options.more.length) + options.more;
  }
}

export default remarkGenPreview;
