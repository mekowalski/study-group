import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Malind'
        date='Today at 9:18am'
        text='Great article'
        avatar={faker.image.avatar()}/>
      <CommentDetail
        author='Richard'
        date='Today at 7:30am'
        text='what is react???'
        avatar={faker.image.avatar()}/>
      <CommentDetail
        author='Ally'
        date='Yesterday at 10:45pm'
        text='tl, dr'
        avatar={faker.image.avatar()}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
