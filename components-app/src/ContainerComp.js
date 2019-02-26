import React form 'react';

class ContainerComp extends React.Component {
  state = { author: [] }

  this.setState({ authors: response.data.results })

  const onAuthorSubmit = {function()}

  <Author onSubmit={this.onAuthorSubmit()}>
  onSubmit

  render()
}

export default ContainerComp


<input
  type='text'
  value={this.state.author}
  onChange={(e) => this.setState({author: e.target.value})}
/>

import { connect } from 'react-redux'

const mapStateToProps = (state) = {

  return { authors: state.authors }
}

exprt default connect(mapStateToProps)(ContainerComp)
