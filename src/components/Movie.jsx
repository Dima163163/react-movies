function Movie({movie}) {
  const {
    Poster: poster,
    Title: title,
    Type: type,
    Year: year,
    imdbId: id,
  } = movie;
  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
      {poster === 'N/A' ? (
        <img className="activator card-movie-img" alt="poster" src={`https://placehold.jp/000000/ffffff/300x400.png?text=${title}`} />
      ) : (
        <img className="activator card-movie-img" alt="poster" src={poster} />
      )}
        
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year}<span className="right">{type}</span></p>
      </div>
    </div>
  )
}

export {Movie}