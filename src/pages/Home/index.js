import React from 'react';
import FullpageSection from '../../components/FullpageSection';
import ContactLinks from '../../components/ContactLinks';
import PageHeader from '../../components/PageHeader';
import ProfileSummary from '../../components/ProfileSummary';

const pageHeaderData = {
    title: 'Jose Tovar',
    subtitle: 'Web Engineer, husband, gamer and a terrible musician'
};

const profileDescriptionData = `<p>Jose is a Web Engineer experienced in Web technologies with a strong background and knowledge of accessibility guidelines such as Section 508, W3C WAI, content management systems and JavaScript based web applications.</p><p>His goals as a Web Engineer are to integrate visual comps, user experience requirements, web accessibility standards, and SEO guidelines into well structured, readable and maintainable code.</p>`;

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
            <a href="#more-about-jose">&lt; More about Jose &gt;</a>
        </FullpageSection>

        <FullpageSection id="more-about-jose">
            <ProfileSummary data={profileDescriptionData}/>
            <a href="#headline">&lt; Back to contact info &gt;</a>
        </FullpageSection>
    </React.Fragment>
);
