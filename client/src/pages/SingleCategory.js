import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import HobbyList from '../components/HobbyList';
import HobbyForm from '../components/HobbyForm';
import { QUERY_SINGLE_CATEGORY, QUERY_ALL_HOBBIES } from '../utils/queries';

const SingleCategory = () => {
  const { id } = useParams();
  
  const { loading: loadingCategory, data: categoryData } = useQuery(QUERY_SINGLE_CATEGORY, {
    variables: { categoryId: id },
  });

  const { loading: loadingHobbies, data: hobbiesData } = useQuery(QUERY_ALL_HOBBIES, {
    variables: { categories: id },
  });

  if (loadingCategory || loadingHobbies) {
    return <div>loading...</div>;
  }

  const category = categoryData.category;
  const hobbies = hobbiesData.hobbies;

  return (
    <div className="my-3">
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            lineHeight: '1.5',
          }}
        >
          {category.description}
        </blockquote>
      </div>
      <HobbyForm category={category.title} categoryId={category._id} />
      <div className='my-5'>
        <h2>Hobbies:</h2>
        {hobbies.map((hobby) => (
          <div key={hobby._id}>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/hobbies/${hobby._id}`}
            >
              Join the discussion on this hobby.
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;