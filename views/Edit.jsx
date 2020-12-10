const React = require('react');
const Layout = require('./layout/Layout.jsx');

// THE NAME OF THE CLASS HAS TO BE PASCALCASE
// The File name has to start with a capital letter

class Edit extends React.Component {
    render(){
        const {name, technologies, description, link, img, _id } = this.props.project;
        return (
            <Layout
             title={`Edit ${name.toUpperCase()} Page`}
             stylesheet="/style.css"
            >
                <form action={`/projects/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" value={name} /><br/>
                Technologies: <input type="text" name="technologies" value={technologies} /><br/>
                Description: <input type="text" name="description" value={description} /><br/>
                link: <input type="text" name="link" value={link} /><br/>
                img: <input type="text" name="img" value={img} /><br/>
                <input type="submit" name="" value="Update Project"/>
             </form>
            </Layout>
        )
    }
}
module.exports = Edit;