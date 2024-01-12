import React from 'react'

const Text = () => {
    const style = {
        justifyContent: "center"
    }
  return (
    <div className='container d-flex my-5' style={style}>
      <textarea cols="100" rows="20"></textarea>
    </div>
  )
}

export default Text
