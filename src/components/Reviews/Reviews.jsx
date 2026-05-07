import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import fetchMovies from '@/moviesApi';
import style from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //  useParams(), для получить значения динамических сегментов из URL, что бы реализовать http запрос с этим параметром
  const { movieId } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`..`);
  };

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const resMovieReviews = await fetchMovies(`movie/${movieId}/reviews`);
        setReviews(resMovieReviews?.results || []);
        setError(null);
      } catch (error) {
        if (error.code === 'ERR_CANCELED') {
          // Запрос отменён — просто игнорируем
          return;
        } else {
          setError(
            `Failed to load cast list: ${error.message || 'Unknown error'}`,
          );
          console.error('Error when receiving movies:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div className={style.reviewsContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : reviews.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul className={style.reviewsList}>
          {reviews.map(review => (
            <li className={style.reviewsItem} key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      <button
        className={style.reviewsButton}
        type="button"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default Reviews;
