const React = require('react');
const Layout = require('./layout/Layout.jsx');


class New extends React.Component {
    render() {
      return (
        //   <AppLayout
        //   title="New Projects Page" 
        //   stylesheet="/newStyle.css"
        //   js="/newApp.js"
        //   >
        <>
            <form action="/projects" method="POST">
                Name: <input type="text" name="name" /><br/>
                Technologies: <input type="text" name="technologies" /><br/>
                Description: <input type="text" name="description" /><br/>
                Image: <input type="text" name="img" /><br/>

                <input type="submit" id="createProject" name="" value="Create Project"/>
            </form>
        </>
        //   </AppLayout>
      )
    }
  }
  
module.exports = New;

