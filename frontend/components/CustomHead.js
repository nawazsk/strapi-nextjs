import Head from 'next/head'
const CustomHead = () => (
    <div>
        <Head>
            <title>Microsite</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <style jsx global>{`
            body {
                margin:0;
                padding:0;
                font-size: 16px;
                font-family: arial;
                color: #000;
            }
        `}</style>
    </div>
);

export default CustomHead;