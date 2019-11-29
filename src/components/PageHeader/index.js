import React from 'react';
import './index.scss';

export default ({title, subtitle, children, ...restProps}) => (
    <header className="page-header">
        <h1 className="page-header__title">
        <span>{title}Jose Tovar</span>
        <small className="page-header__title-small">
            {subtitle} Web Engineer, husband, gamer and a terrible musician
        </small>
        </h1>
    </header>
);
