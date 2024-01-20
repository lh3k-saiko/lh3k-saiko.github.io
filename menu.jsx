export const layout = "layout-menu.jsx";
export const title = "Menu";

const ENTRIES = ["/article"];

export default function* ({ nav, paginate }, helpers) {
  const datas = [];

  function dfs({ data, children }) {
    if(children) {
      for(const child of children) dfs(child);
    } else {
      datas.push(data);
    }
  }
  
  for (const entry of ENTRIES) {
    const root = nav.menu(entry);
    if(!root) return ;
    dfs(root);
  }

  const options = {
    url: (n) => n == 1 ? `/menu/` : `/menu/${n}`,
    size: 10
  };

  for(const page of paginate(datas, options)) {
    yield page;
  }
}