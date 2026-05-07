import React from 'react';
import { Formik, Form, Field } from 'formik';
import { IoSearch } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import style from './SearchBox.module.css';

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = ({ movieName }, { resetForm }) => {
    if (movieName.trim() === '') {
      return toast.error('Fill in the search field');
    }

    onSubmit(movieName);
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ movieName: '' }} onSubmit={handleSubmit}>
        <Form className={style.searchBarForm}>
          <button className={style.searchBarButton} type="submit">
            <IoSearch className={style.searchBarIcon} />
          </button>

          <Field
            className={style.searchBarField}
            name="movieName"
            type="text"
            autoFocus
            placeholder="Search movies"
          />
        </Form>
      </Formik>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
