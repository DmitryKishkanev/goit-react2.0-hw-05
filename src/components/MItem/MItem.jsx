import { Link, useLocation } from 'react-router-dom';

const MItem = () => {
  const location = useLocation();

  return (
    <div>
      <Link state={location}>movie</Link>
    </div>
  );
};

export default MItem;
