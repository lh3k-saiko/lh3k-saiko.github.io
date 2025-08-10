/**
 * 
 */

import { GitIgnore, findRepoRoot } from 'cspell-gitignore';
import { glob, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { isBinaryFile } from "isbinaryfile";
import he from "he";

export default async function *(): AsyncIterable<Partial<Lume.Data>> {
  const cwd = Deno.cwd();
  const root = (await findRepoRoot(cwd)) || cwd;
  const gitIgnore = new GitIgnore([root]);
  const allFiles = glob("**");

  for await(const filepath of gitIgnore.filterOutIgnored(allFiles)) {
    if(filepath.indexOf("_size") != -1) continue;
    if (!(await stat(filepath)).isFile()) continue;
    const content = await readFile(filepath);
    const base = `${path.relative(cwd, filepath).replaceAll('\\', '/')}`;
    const url = `/viewsource/${base}.html`;
    const title = `viewsource:${base}`;
    if(await isBinaryFile(content, content.length)) {
      // cuurently nothing to do but continue
      continue;
    } else {
      yield {
        layout: "barebone.vto",
        title,
        url,
        base,
        content: `<pre>${he.encode(new TextDecoder("utf-8").decode(content))}</pre>`,
      }
    }
  }

}


