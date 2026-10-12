import React from "react";

function ContactCard({ name, job, email }) {
    return React.createElement(
        'li',
        { className: 'content-card' },
        React.createElement('h2', null, name),
        React.createElement(
            'dl',
            null,
            React.createElement('dt', null, 'Job'),
            React.createElement('dd', null, job),
            React.createElement('dt', null, 'Email'),
            React.createElement('dd', null, email)
        )
    );
}

export default ContactCard;