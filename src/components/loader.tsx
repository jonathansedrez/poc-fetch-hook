import React from 'react'

import '../App.css';

type LoaderProps = {
  isVisible: boolean,
}
const Loader = ({ isVisible }: LoaderProps) => {
  return (    
    <React.Fragment>
      {isVisible && (
        <div className="loading">
          <h2 className="loading-text">Loading</h2>
        </div>
      )}
    </React.Fragment>
  )
}

export default Loader