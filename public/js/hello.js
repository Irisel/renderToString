import React from 'react'
import styles from '../src/css/app.css'
console.log(styles)

class Hello extends React.Component {
  constructor(props){
    super(props)
  }
  handleClick(e, args){
    console.log(e, args)
  }
  render () {
    return (
      <div className="application">
				<h1>Hello World</h1>
				<pre>{this.props.url}</pre>
                <button className={styles.confirm} onClick={this.handleClick.bind(this, 'test')}>confirm</button>
			</div>
    )
  }
}

export default Hello
