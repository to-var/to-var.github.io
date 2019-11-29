import React from "react";

export default ({children, link, ...restProps}) => (
    <li className="contact-links__list-item" {...restProps}>
        <a
            className="contact-links__link"
            target="_blank"
            rel="noopener noreferrer"
            href={link}
        >
            {children}
        </a>
    </li>
);
