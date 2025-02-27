import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/sweetalert2@11"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <div id="code-form"></div>
        <div className="lsd-ring-container d-none"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
