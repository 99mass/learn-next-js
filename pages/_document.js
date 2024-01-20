import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head >
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
                        rel="stylesheet" 
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css" 
                    />

                </Head>
                    <body>

                        <Main />
                        <NextScript />

                    </body>
            </Html>
        )
    }
}

export default MyDocument