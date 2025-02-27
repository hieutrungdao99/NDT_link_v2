import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/sweetalert2@11"
        strategy="beforeInteractive"
      />
      <Script src="/js/getCode.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
