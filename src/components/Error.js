import React from 'react'


class Error extends React.Component {

  goBack = () => {
    this.props.history.push('/generator')
  }

  render() {
    return (
      <>

        <h1>What did you do!?</h1>
        <button onClick={this.goBack}>Go Back and Fix It!</button>

      </>
    )

  }


}

export default Error