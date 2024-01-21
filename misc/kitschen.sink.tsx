export const title = "Kitchen Sink";
export const description = "Testing the stylesheet (TODO: add more untested blocks)";
export const layout= "layout-md.tsx";
export const publishDate = new Date("2024-01-15");

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <h1>Kitchen Sink</h1>
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
    <h4>H4</h4>
    <h5>H5</h5>
    <h6>H6</h6>
    <p>Hello World <a>Home</a></p>
    <ul>
      <li>Hello</li>
      <li>World</li>
      <li>
        <ol>
          <li>Hey</li>
          <li>What's going on?</li>
        </ol>
      </li>
    </ul>
    <p><img src="/static/background.jpg"></img></p>
    <p><em>em</em> <i>italic</i> <b>bold</b> <em><em>em</em> in em</em> <b><b>bold</b> in bold</b></p>
    <table>
      <thead>
        <tr><th>A</th><td>B</td><td>C</td><td>D</td></tr>
      </thead>
      <tbody>
      <tr><th>E</th><td>F</td><td>G</td><td>H</td></tr>
      <tr><th>I</th><td>J</td><td>K</td><td>L</td></tr>
      <tr><th>M</th><td>N</td><td>O</td><td>P</td></tr>
      <tr><th>Q</th><td>R</td><td>S</td><td>T</td></tr>
      </tbody>
    </table>
  </>
);