export default function Stories() {
  const stories = [
    { user: '9gag', image: 'assets/img/9gag.svg' },
    { user: 'meowed', image: 'assets/img/meowed.svg' },
    { user: 'barked', image: 'assets/img/barked.svg' },
    { user: 'nathanwpylestrangeplanet', image: 'assets/img/nathanwpylestrangeplanet.svg' },
    { user: 'wawawicomics', image: 'assets/img/wawawicomics.svg' },
    { user: 'respondeai', image: 'assets/img/respondeai.svg' },
    { user: 'filomoderna', image: 'assets/img/filomoderna.svg' },
    { user: 'memeriagourmet', image: 'assets/img/memeriagourmet.svg' },
  ];

  function Story({ user, image }) {
      return (
          <div className="story">
              <div className="imagem">
                  <img src={image} alt={user} />
              </div>
              <div className="usuario">{user}</div>
          </div>
      );
  }

  return (
    <div className="stories">
      {stories.map((story) => (
        <Story key={story.user} user={story.user} image={story.image} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
