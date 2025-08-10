export interface Header {
  level: number,
  slug: string,
  link: string,
  content: string,
  children?: Header[]
}

declare global {
  namespace Lume {
    export interface Data {
      toc?: Header,
    }
  }
}

export function normalizeHeaders(headers: Header[]): Header {
  function normalize(header: Header, parent?: Header) {
    if(parent) {
      header.level = parent.level + 1;
    } else {
      header.level = 1;
    }

    if(!header.children) return ;
    for(const child of header.children) {
      normalize(child, header);
    }
  }

  const res = headers[0];
  if(!res.children) res.children = [];
  for(let i = 1; i < headers.length; i++) {
    headers[i].level += 1;
    res.children.push(headers[i]);
  }

  normalize(res);
  return res;
}

