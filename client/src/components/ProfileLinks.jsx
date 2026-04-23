const ProfileLinks = ({ profiles }) => {
  const links = [
    { label: 'GitHub', value: profiles.github },
    { label: 'LeetCode', value: profiles.leetcode },
    { label: 'LinkedIn', value: profiles.linkedin },
    { label: 'Email', value: profiles.email }
  ];

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mt-4">
      {links.map((link) => (
        <a
          key={link.label}
          className="btn btn-outline-light rounded-pill px-4"
          href={link.value}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default ProfileLinks;
