import React from 'react';
import FullpageSection from '../../components/FullpageSection';
import ContactLinks from '../../components/ContactLinks';
import PageHeader from '../../components/PageHeader';
import { Link } from "react-router-dom";

const pageHeaderData = {
    title: 'Jose Tovar',
    subtitle: 'Web Engineer, husband, gamer and a terrible musician'
};

const contactLinksData = { linkItems: [
    { name: 'Twitter', link: 'http://twitter.com/tmjoseantonio' },
    { name: 'Github', link: 'http://github.com/tmjoseantonio' },
    { name: 'LinkedIn', link: 'https://co.linkedin.com/in/josetovarfrontenddeveloper' }
]};

export default () => (
    <React.Fragment>
        <FullpageSection id="headline">
            <PageHeader data={pageHeaderData} />

            <ContactLinks data={contactLinksData} />
            <Link to="/about">&lt; More about Jose &gt;</Link>
        </FullpageSection>
    </React.Fragment>
);
