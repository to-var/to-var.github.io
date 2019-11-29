import React from "react";
import Helmet from "react-helmet";

const description = "Jose is a Web Engineer experienced in Web technologies with a strong background and knowledge of accessibility guidelines such as Section 508, W3C WAI, content management systems and JavaScript based web applications"

export default () => (
<Helmet>
    <meta charset="utf-8" />
    <title>Jose Tovar - Web Engineer</title>
    <meta name="description" content={description} />
    <meta name="author" content="Jose Tovar" />
    <meta name="subject" content="frontend development" />
    <meta name="description" content={description} />
    <meta name="classification" content={description}/>
    <meta name="keywords" content="frontend, developer, web developer, javascript, html5, front-end, web ui"/>
    <meta name="language" content="english" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta name="copyright" content="Jose Tovar" />
    <meta name="distribution" content="global" />
    <meta name="robots" content="index,follow" />
    <meta property="og:url" content="http://tmjoseantonio.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Jose Tovar - Web Engineer" />
    <meta property="og:description" content={description}/>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@tmjoseantonio" />
    <meta name="twitter:creator" content="@tmjoseantonio" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="msapplication-TileColor" content="#ffffff" />
</Helmet>
);
