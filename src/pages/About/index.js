import React from 'react';
import FullpageSection from '../../components/FullpageSection';
import ProfileSummary from '../../components/ProfileSummary';
import { Link } from "react-router-dom";

const profileDescriptionData = `<p>As Lead Web Engineer, Jose focuses on transforming visual designs, accessibility, and functional requirements into performant, readable, and scalable solutions. Along with ensuring quality delivery across multiple tracks of work, Jose also has experience leading teams of web engineers to develop new skills and broaden their capabilities.</p>`;

export default () => (
    <React.Fragment>
        <FullpageSection id="more-about-jose">
            <ProfileSummary data={profileDescriptionData}/>
            <Link to="/">&lt; Back to contact info &gt;</Link>
        </FullpageSection>
    </React.Fragment>
);
