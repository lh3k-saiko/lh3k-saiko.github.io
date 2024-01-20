import Layout from "./layout.tsx";

export default ({ url, results, pagination : { page, totalPages, previous, next } }, helpers ) => {
  const title = "Menu";

  const children = (
    <article class="content-display mx-auto px-6 box-border max-w-5xl">
      <h1>Menu</h1>
      <Page0 />
      <ul class="mt-10">
        { results.map(mapf) }
      </ul>    
      { previous || next ? <div class="flex text-xl font-bold">
        { previous ? <a href={previous} class="flex-1 text-left">&lt; Previous</a> : <span class="flex-1"> </span> }
        <span class="flex-1 text-center">{page}/{totalPages}</span>
        { next     ? <a href={next}     class="flex-1 text-right">Next &gt;</a>    : "" }
      </div> : ""}
    </article>
  ); 

  return Layout({ children, title }, helpers);
}

function mapf({ title, url, description }) {
  return (
    <li><a href={url}>{ title }<span class="font-mono text-xs align-sub">{url}</span> </a>: {description}</li>
  )
}

function Page0() {
  return (
    <>
      <p><a href="/archive/" class="font-mono">Archive</a>: To view all pages posted on this site.</p>
      <p><a href="/article/" class="font-mono">Article</a>: The major contents of this site.</p>
      <p>I'm wishing this page could be more reader-friendly, someday. Sorry......</p>
    </>
  )
}