import Layout from "./layout.tsx";

export default ({ children, ...data }: Lume.Data, helpers: Lume.Helpers ) => {
  children = (
    <article class="content-display mx-auto px-6 box-border max-w-[52rem]"> {children} </article>
  );

  return Layout({ children, ...data }, helpers);
}