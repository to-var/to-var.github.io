import React from 'react';
import './index.scss';

export default ({data, children, ...restProps}) => (
    <div className="profile-summary" {...restProps} dangerouslySetInnerHTML={{ __html: data }}>
        {children}
    </div>
);