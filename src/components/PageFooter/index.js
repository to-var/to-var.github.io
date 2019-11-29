import React from "react";
import './index.scss';

export default ({children, ...restProps}) => (
    <footer className="page-footer" {...restProps}>
        <summary className="page-footer__summary">{children}</summary>
    </footer>
);
