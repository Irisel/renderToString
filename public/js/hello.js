import React from 'react'

class Hello extends React.Component {
  render () {
    return (
      <div className="application">
				<h1>Hello World</h1>
				<pre>{this.props.url}</pre>
			</div>
    )
  }
}

export default Hello
