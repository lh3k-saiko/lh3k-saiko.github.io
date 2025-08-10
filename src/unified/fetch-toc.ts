import type { Root } from "mdast";
import type { VFile } from "vfile";
import type { Plugin } from "unified";
import type { Header } from "../toc.ts";

import Slugger from "github-slugger";
import { visit as unistUtilVisit } from "unist-util-visit"
import { toString as mdastToString } from "mdast-util-to-string"
import { normalizeHeaders } from "../toc.ts"

const remarkFetchToc: Plugin<[], Root> = () => {
  return function (tree: Root, file: VFile) {
    const slugger = new Slugger;

    const headers: Header[] = [];
    const stack: Header[] = [];

    unistUtilVisit(tree, "heading", (node) => {
      const content = mdastToString(node);
      const slug = slugger.slug(content);
      const link = `#${slug}`;
      const header: Header = {
        level: node.depth,
        slug,
        link,
        content,
        children: [],
      };

      while(stack.length > 0 && header.level <= stack[stack.length - 1].level) stack.pop();
      if(stack.length > 0) {
        stack[stack.length - 1].children!.push(header);
      } else {
        headers.push(header);
      }
      stack.push(header);

      if(!node.data) node.data = {};
      if(!node.data.hProperties) node.data.hProperties = {};
      node.data.hProperties.id = slug;
    })

    if(headers.length == 0) {
      const n = tree.children.length;
      const slug = slugger.slug(file.data.title as string);
      for(let i = n; i > 0; --i) tree.children[i] = tree.children[i - 1];
      tree.children[0] = {
        type: "heading",
        depth: 1,
        children: [ { type: "text", value: file.data.title as string } ],
        data: { hProperties: { id: slug } }
      };
      headers.push({
        level: 1,
        content: file.data.title as string,
        link: `#${slug}`,
        slug,
        children: [],
      });
    }
    file.data.toc = normalizeHeaders(headers);
  }
}

export default remarkFetchToc;
