const MoreUpcomingFilms = () => {
    const imdbCalendarUrl = "https://www.imdb.com/calendar/?region=gb";
  
    return (
      <div>
        <a href={imdbCalendarUrl} className="button">
          View more upcoming releases
        </a>
      </div>
    );
  };
  
  export default MoreUpcomingFilms;