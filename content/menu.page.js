export const layout = "arisa/menu.vto";
export const title = "Menu";

const ENTRIES = ["/content"];

export default function* ({ nav, paginate }, _helpers) {
  const dataArray = [];

  function dfs({ data, children }) {
    if(children) {
      for(const child of children) dfs(child);
    } else {
      dataArray.push(data);
    }
  }
  
  for (const entry of ENTRIES) {
    const root = nav.menu(entry);
    if(!root) return ;
    dfs(root);
  }

  const sortedData = dataArray.sort((a, b) => {
    const aTime = a.publishDate ?? a.stats.mtime;
    const bTime = b.publishDate ?? b.stats.mtime;

    if(!(aTime instanceof Date) && !(bTime instanceof Date)) return 0;
    if(!(aTime instanceof Date)) return 1;
    if(!(bTime instanceof Date)) return -1;

    return bTime - aTime;
  })

  const options = {
    url: (n) => n == 1 ? `/menu/` : `/menu/${n}`,
    size: 10
  };

  for(const page of paginate(sortedData, options)) {
    page.layout = layout;
    page.content = "Nothing"
    yield page;
  }
}