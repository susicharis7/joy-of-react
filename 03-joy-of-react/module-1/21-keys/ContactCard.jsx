function ContactCard({ name, job, email }) {
    console.log(name);
    console.log(job);
    console.log(email);

    return(
        <li className="contact-card">
            <h2>{name}</h2>
            <dl>
                <dt>Job</dt>
                <dd>{job}</dd>
                <dt>Email</dt>
                <dd>{email}</dd>
            </dl>
        </li>
    );
}


export default ContactCard;