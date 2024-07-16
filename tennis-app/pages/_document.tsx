import Document, { Html, NextScript, Head, Main } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/*Favicon*/}
                    <link rel="icon" href="/public/favicon/tennis-ball.ico"/>
                </Head>
                <body className="custom-class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;