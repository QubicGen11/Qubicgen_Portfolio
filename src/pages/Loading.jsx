import React from 'react'

const Loading = () => {
  return (
    <div className='load' style={{display:'flex',justifyContent:'center'}}>
        <div className="spinner-grow text-warning" role="status" >
  <span className="visually-hidden">Loading...</span>
</div>

    </div>

 )
}

export default Loading