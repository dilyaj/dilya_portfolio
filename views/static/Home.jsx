const React = require('react');
const Layout = require('../layout/Layout.jsx');

class Home extends React.Component {
  render(){
    return (
    <Layout>
      <div>
          <body>
            {this.props.children}
                </body>
        <h1>
          My name is Dilya Joseph.<br/> I am a Full-Stack developer.<br/> Let's get to know each other.
          <br/>Thanks for visiting my portfolio.
        </h1>
      </div>
    </Layout>
    )
  }
}

module.exports = Home;