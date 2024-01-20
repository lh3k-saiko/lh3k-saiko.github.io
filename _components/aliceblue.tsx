import { JSX } from "npm:preact/jsx-runtime";

const NAV_HEIGHT = "4.5rem";
const DEFAULT_LINKS: LinkType[] = [
  {
    href: "/",
    content: "Home",
    importance: 0
  },
  {
    href: "/menu",
    content: <>Menu</>,
    importance: 0
  },
  {
    href: "/archive",
    content: "Archive",
    importance: 3
  },
  {
    href: "/about-me",
    content: "About me"
  }
];
const SITE_NAME = (
  <span class="font-bold font-mono py-2 px-4 rounded-full backdrop-blur-sm backdrop-brightness-50">
    <span class="[line-height:1rem] sm:inline hidden">lh3k-saiko</span><span class="[line-height:1rem] sm:hidden inline">lh3k</span>
  </span>);

export interface LinkType {
  href: string;
  abbr?: string;
  content: string | JSX.Element;
  importance?: number
}

export default function Aliceblue({ children, links, ...data } : Lume.Data ) {
  links ||= DEFAULT_LINKS;
  return (
    <>
      <div id="background"></div>
      <Navigator links={links} />
      <div class="z-0">{children}</div>
    </>
  )
}

function Navigator({ links }: { links: LinkType[] }) {
  const links_elements = links.map(NavLinks);
  return (
    <nav class={`h-[${NAV_HEIGHT}] w-full bg-transparent sticky top-0 z-10 flex justify-between`}>
      <div class={`flex justify-center items-center h-[${NAV_HEIGHT}] px-4`}>{ SITE_NAME }</div>
      <div class="flex flex-columns">{links_elements}</div>
    </nav>
  )
}

function NavLinks(link: LinkType) {
  let { href, content, importance } = link;

  if(importance !== 0) importance ||= 3;

  let show_level;

  switch(importance) {
    case 0: show_level = "flex"; break;
    case 1: show_level = "hidden sm:flex"; break;
    case 2: show_level = "hidden md:flex"; break;
    case 3: show_level = "hidden lg:flex"; break;
    case 4: show_level = "hidden xl:flex"; break;
    case 5: show_level = "hidden 2xl:flex"; break;
  };

  return (
    <div class={`${show_level} justify-center items-center h-[${NAV_HEIGHT}] sm:px-4 px-2`}>
      <a class="inline-block py-2 px-4 rounded-full backdrop-blur-sm backdrop-brightness-50 hover:backdrop-brightness-[.75]" href={href}>{ content }</a>
    </div>
  )
}