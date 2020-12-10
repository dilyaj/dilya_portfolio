
const React = require('react');
const Layout = require('./layout/Layout.jsx');

class Show extends React.Component {
    render(){
        return (
            <Layout>
                <p>
                    {this.props.project.name}<br/>
                    {this.props.project.technologies}<br/>
                    {this.props.project.description}<br/>
                    <img src={`${this.props.project.img}`}/><br/>

                </p>
                <a href={'/projects'}>Go Back Home</a><br/>
                <a href={'/projects/new'}>Create a New Project</a><br/>
                <a href={`/projects/${this.props.project.id}/edit`}>{`Edit ${this.props.project.name.toUpperCase()}`}</a>
            </Layout>
        )
    }
}
module.exports = Show;