import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={faker.image.avatar()}/>
      </a>

      <div className='content'>
        <a href='/' className='author'>
          Malind
        </a>
        <div className='metadata'>
          <span className='date'>Today at 9:26AM</span>
        </div>
        <div className='text'>Nicely written article</div>
      </div>
    </div>
  )
}

export default CommentDetail
