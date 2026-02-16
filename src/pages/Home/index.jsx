import React from 'react'
import Button from '../../components/Button'

 const Home= () => {
  return (
    <>
      <div>Home</div>
      <Button to="/about" variant="primary">
        Go to About
      </Button>
    </>
  );
}

export default Home