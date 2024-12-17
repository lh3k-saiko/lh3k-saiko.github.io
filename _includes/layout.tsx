import Aliceblue from "../_components/aliceblue.tsx" 

export default ({ title, children, ...data }: Lume.Data, helpers: Lume.Helpers ) => (
  <html>
    <head>
      <title>{ title }</title>
      <meta charset="utf-8" />
      <link rel="icon" href="/static/avatar.jpg" />
      <link href="/styles.css" rel="stylesheet" />
      <link href="/static/katex/katex.min.css" rel="stylesheet" />
      <link href="/background.css" rel="stylesheet" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <div className="."></div>
    <body>
      { Aliceblue({ children, ...data }) }
      <script src="/static/katex/katex.min.js"></script>
      <script src="/static/katex/contrib/auto-render.min.js"></script>
      <script src="/static/misc.js"></script>
    </body>
  </html>
)