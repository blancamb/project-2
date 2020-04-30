import React from 'react'


class Home extends React.Component {

  goBack = () => {
    this.props.history.push('/generator')
  }

  render() {
    return (
      <>

        <h1>Welcome</h1>
        <button onClick={this.goBack}>Click this to start!</button>

      </>
    )

  }


}

export default Home