import React from "react";
import './index.scss';

export default ({children, ...restProps}) => (
    <section className="fullpage-section" {...restProps}>
        {children}
    </section>
);
