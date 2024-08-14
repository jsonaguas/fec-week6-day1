import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MoviesList.css'; // Ensure this import is correct

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'Inside Out', description: "A young girl named Riley's emotions—Joy, Sadness, Anger, Fear, and Disgust—help her navigate the challenges of moving to a new city in this Pixar film.", genre: 'Drama' },
    { title: 'Toy Story 3', description: "As Andy heads to college, his toys, including Woody and Buzz, find themselves in a daycare center, facing new challenges and learning the importance of friendship.", genre: 'Action' },
    { title: 'Up', description: "Elderly widower Carl Fredricksen embarks on an adventure to South America by flying his house with balloons, accompanied by a young boy named Russell", genre: 'Action' },
    { title: 'Wall-E', description: "In a future where Earth is uninhabitable, a robot named Wall-E discovers a plant and embarks on a space journey, highlighting environmental themes.", genre: 'Science Fiction' },
    { title: 'The Incredibles', description: "The Parr family, living in a world where superheroes must hide their powers, comes together to battle a new threat, learning the value of teamwork.", genre: 'Action' }
  ]);

  const [visibleDetails, setVisibleDetails] = useState({});
  const [showAll, setShowAll] = useState(true);

  const toggleDetails = (index) => {
    setVisibleDetails(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const removeMovie = (index) => {
    setMovies(prevMovies => prevMovies.filter((_, i) => i !== index));
  };

  const toggleView = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  const filteredMovies = showAll ? movies : movies.filter(movie => movie.genre === 'Action');

  return (
    <div className="container">
      <h1 className="my-4">Movie Titles</h1>
      <button className="btn btn-primary mb-3" onClick={toggleView}>
        {showAll ? 'Show Action Movies' : 'Show All Movies'}
      </button>
      <ul className="list-group">
        {filteredMovies.map((movie, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div
              className={`movie-title ${visibleDetails[index] ? 'active' : ''}`}
              onClick={() => toggleDetails(index)}
            >
              {movie.title}
            </div>
            {visibleDetails[index] && <p className="mt-2">{movie.description}</p>}
            <button className="btn btn-danger" onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;