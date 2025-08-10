import { stat } from "node:fs/promises";
import type { Stats } from "node:fs";
import path from "node:path"
import process from "node:process";

declare global {
  namespace Lume {
    export interface Data {
      stats: Partial<Stats>,
    }
  }
}

interface Options {
  included_info: (keyof Stats)[]
}

const defaultOptions: Options = {
  included_info: ["atime", "mtime", "ctime", "birthtime"]
};

export default function(userOptions: Partial<Options> = {}) {
  const options = Object.assign({}, defaultOptions, userOptions);
  const included_info = new Set(options.included_info);
  return function (site: Lume.Site){
    site.preprocess(async (pages: Lume.Page[]) => {
      for (const page of pages) {
        page.data.stats = {};
        try {
          const stats: Stats = await stat(path.join(process.cwd(), page.src.path + page.src.ext));
          for(const key in stats) {
            if(included_info.has(key as keyof Stats)) {
              page.data.stats[key] = stats[key as keyof Stats];
            }
          }
        } catch {
          continue;
        }
      }
    });
  }
}
