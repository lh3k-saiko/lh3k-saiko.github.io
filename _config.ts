import lume from "lume/mod.ts";
import esbuild from "lume/plugins/esbuild.ts";
import _sass from "lume/plugins/sass.ts";
import nav from "lume/plugins/nav.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";


import markdown from "./src/plugins/my-markdown.ts";
import stats from "./src/plugins/stats.ts";

const site = lume({
  server: {
    port: 3000,
    debugBar: false,
  },
}, {
  markdown: {
    // Disable the default markdown settings (using remark instead)
    extensions: [".markdownit.md"],
  }
});

site.use(markdown());
site.use(esbuild({
  options: {
    bundle: true,
    format: "iife"
  },
}))

// site.use(sass(/* Options */))
site.use(tailwindcss());
site.use(nav());
site.use(stats());
site.use(postcss());

site.add("js");
site.add("style");
site.add("static");

site.filter("formatDate", (date: Date) => {
  const localeString = date.toLocaleString();
  const offset = date.getTimezoneOffset();
  const gmt = offset == 0 ? "" : `${offset > 0 ? "+" : "-"}${Math.abs(offset / 60)}:00`;
  return `${localeString} GMT${gmt}`
}, false)

export default site;
