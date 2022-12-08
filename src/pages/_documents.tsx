import Document,{ Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render(){
        return (
            <Html>
            <Head>
                <link rel='preconnet' href = "https://fonts.gastatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
                
                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
         
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
            </Html>
        )
    }
}