export function htmlWrapper() {
  return `
<html>
  <head>
    <meta charset="utf8">
    <style>
      html, body {
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact;
        box-sizing: border-box;
      }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Cardo|Montserrat:300" rel="stylesheet">
  </head>
  <body>
  ${renderToString(this.render())}
  </body>
</html>
  `;
}
