import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, Link, useLocation } from 'react-router-dom';
import MItem from '@/components/MItem';
import Navigation from '@/components/Navigation';

const MoviesDetails = () => {
  const params = useParams();
  const location = useLocation();

  return (
    <main>
      <Link to={location.state}>Go back</Link>
      <MItem />
      <Navigation />

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MoviesDetails;
