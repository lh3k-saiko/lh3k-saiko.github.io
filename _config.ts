import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import mdx from "lume/plugins/mdx.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import nav from "lume/plugins/nav.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
    location: new URL("https://lh3k-saiko.github.io/lh3k-saiko")
});

site.copy("static");

site.ignore("/docs/");
site.ignore("README.md");

site.use(jsx_preact());
site.use(code_highlight());

site.use(tailwindcss({
    extensions: [".html", ".jsx", ".tsx"],
}));
site.use(postcss());

site.use(mdx());
site.use(multilanguage({
    languages: ["zh-cn", "en", "ru"],
    defaultLanguage: "en",
}));
site.use(nav());

// site.use(basePath());

export default site;
