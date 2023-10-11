import { Fragment } from 'react';
// import { useNavigate } from 'react-router-dom';

// link ini hanya bekerja jika berada didalam body RouterProvider di App.js

const HomePage = () => {
  // const navigate = useNavigate();

  // const navigateHandler = () => {
  //   navigate('/products');
  // };

  return (
    <Fragment>
      <p>This is home page</p>
      {/* <button onClick={navigateHandler}>change route programmatically</button> */}
      {/* <Link to="/products">Go to products page</Link> */}
    </Fragment>
  );
};

export default HomePage;
