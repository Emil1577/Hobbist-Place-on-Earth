import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_HOBBY } from '../../utils/mutations';
import { QUERY_CATEGORIES, QUERY_CATEGORY } from '../../utils/queries';

import Auth from '../../utils/auth';

const HobbyForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addHobby, { loading, error}] = useMutation(ADD_HOBBY, {
    update(cache, { data: { addHobby} }) {
      try{
        
        const { categories } = cache.readQuery({ query: QUERY_CATEGORY });
        const updatedCategories = categories.map((category) => {
          if (category._id === addHobby.categories[0]._id){
            return {
              ...category,
              hobbies: [...category.hobbies, addHobby],
            };
          } else {
            return category;
          }
        });
        cache.writeQuery({
          query: QUERY_CATEGORIES,
          data: { categories: updatedCategories}
        });
      } catch (e) {
        console.error(e)
      }
    },
 });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addHobby({
        variables: {
          // categories: category,
          title,
          description,
        },
      });
      
      setTitle('');
      setDescription('');
      setCategory('');

    } catch (error) {
      console.error('Error creating hobby:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if(name === 'description' && value.length <= 280) {
      setDescription(value);
    } else {
      setTitle(value);
    }
    setCharacterCount(title.length + description.length);
  };

  return (
    <div>
      <h3>Add a New Hobby</h3>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
              value={title} 
              onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <input
                name='description'
                value={description} 
                onChange={handleChange}
              />
            </label>
            {/* <label>
              Category:
              <input
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
              />
            </label> */}
            <button type="submit" disabled={!title || !description}>
              {loading ? 'Creating...' : 'Create Hobby'}
            </button>
            {error && (
              <div className='col-12 my-3 bg-danger text-white p-3'>
                Error creating hobby: {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add a Hobby. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default HobbyForm;
