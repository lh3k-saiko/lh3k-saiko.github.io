import Layout from "./layout.tsx";

export default ({ children, url, nav, is_menu_root, ...data }, helpers ) => {
  const mapf = ({ data }) => {
    if(!data) return "";
    const {
      title,
      description,
      publishDate,
      is_menu_root,
      url
    } = data;

    if(is_menu_root) return "";

    return (
      <tr>
        <th class="px-4 py-2 border-2"><a href={url}>{ title }</a></th>
        <td class="px-4 py-2 border-2 font-mono text-center hidden sm:table-cell">{ publishDate ? publishDate.toISOString().substr(0, 10) : "" }</td>
        <td class="px-4 py-2 border-2">{ description || `This guy is too lazy to leave anything!`}</td>
      </tr>
    )
  };

  const cmpf = (a, b) => {
    if(!a.data) return 1; if(!b.data) return -1;
    const ad = a.data.publishDate;
    const bd = b.data.publishDate;
    if(!(ad instanceof Date) && !(bd instanceof Date)) return 0;
    if(!(ad instanceof Date)) return 1;
    if(!(bd instanceof Date)) return -1;
    if(ad < bd) return 1;
    if(bd < ad) return -1;
    return 0;
  }

  const parent = nav.breadcrumb(url).reverse();

  const parent_url = (parent.length > 0 && parent[1].data.url === "/") ? "/archive" : parent[1].data.url;

  children = (
    <div class="w-full max-w-[min(80rem,100vw-1rem)] mx-auto">
      <h1 class="text-xl font-bold font-mono mt-3">{ is_menu_root ? "Archive" : url }</h1>
      <table class="w-full mt-6">
        <thead>
          <th class="px-4 py-2 border-2"></th>
          <th class="px-4 py-2 border-2 hidden sm:table-cell">Date</th>
          <th class="px-4 py-2 border-2">Description</th>
        </thead>
        <tbody>
          { !is_menu_root ? (
            <tr>
              <th class="px-4 py-2 border-2"><a href={parent_url}>..</a></th>
              <td class="px-4 py-2 border-2 hidden sm:table-cell"></td>
              <td class="px-4 py-2 border-2">Back to parent</td>
            </tr>
          ) : (
            <tr>
              <th class="px-4 py-2 border-2"><a href={"/"}>Home</a></th>
              <td class="px-4 py-2 border-2 hidden sm:table-cell"></td>
              <td class="px-4 py-2 border-2">The home page</td>
            </tr>
          ) }
          { ( is_menu_root ? nav.menu() : nav.menu(url) ).children?.sort(cmpf).map(mapf) }
        </tbody>
      </table>
    </div>
  );

  return Layout({ children, url, nav, ...data }, helpers);
}