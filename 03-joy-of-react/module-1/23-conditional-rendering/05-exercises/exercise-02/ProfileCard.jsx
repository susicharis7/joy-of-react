function ProfileCard({ profile }) {
    const numOfBadges = profile.badges.length;

    return(
        <article className="profile-card">
            <header>
                <img 
                 alt={profile.imageAlt}
                 src={profile.imageSrc}
                />

                <h2>{profile.name}</h2>
                <p className="joined">Joined {profile.joinDate}</p>
            </header>

        {numOfBadges > 0 && (
            <ul className={numOfBadges >= 3 ? 'golden badge-list' : 'badge-list'}>
                {profile.badges.map(({ slug, label }) => (
                    <li key={slug}>{label}</li>
                ))}
            </ul>
        )}

        </article>

    );
}

export default ProfileCard;