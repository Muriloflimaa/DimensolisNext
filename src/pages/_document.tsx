import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        type="text/javascript"
                        async
                        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/645a6bda-bfdf-4377-92f9-c42f37625a5b-loader.js"
                    ></script>
                    <meta charSet="utf-8" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
