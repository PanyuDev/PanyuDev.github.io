import { Html, Head, Main, NextScript } from 'next/document'
import { IconContext }                  from "react-icons";

export default function Document() {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <Html lang="en">
      <title>Panyu&#39;s Social Portal</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </IconContext.Provider>
  )
}
