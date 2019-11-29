import React from "react";
import './index.scss';
import ContactLink from './ContactLink';

export default ({data, ...restProps}) => {
    const Links = data.linkItems.map(({name, link}, index) => (
        <ContactLink
            link={link}
            key={index}
        >
            {name}
        </ContactLink>
    ));

    return (
        <nav className="contact-links" {...restProps}>
            <ul className="contact-links__list">
                {Links}
            </ul>
        </nav>
    );
}
