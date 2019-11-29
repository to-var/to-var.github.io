import React from 'react';
import FullpageSection from '../../components/FullpageSection';
import ProfileSummary from '../../components/ProfileSummary';
import { Link } from "react-router-dom";

const profileDescriptionData = `<p>Jose is a Web Engineer experienced in Web technologies with a strong background and knowledge of accessibility guidelines such as Section 508, W3C WAI, content management systems and JavaScript based web applications.</p><p>His goals as a Web Engineer are to integrate visual comps, user experience requirements, web accessibility standards, and SEO guidelines into well structured, readable and maintainable code.</p>`;

export default () => (
    <React.Fragment>
        <FullpageSection id="more-about-jose">
            <ProfileSummary data={profileDescriptionData}/>
            <Link to="/">&lt; Back to contact info &gt;</Link>
        </FullpageSection>
    </React.Fragment>
);
