const React = require('react');
const Layout = require('./layout/Layout.jsx');

class Index extends React.Component{
    render() {
        return (
            <Layout
            stylesheet="/style.css"
            >
                <>
                    <h1>Projects Index Page</h1>
                    {
                        this.props.projects.map((project) => {
                            return (
                                <li>
                                    <a href={`/projects/${project.id}`}>{project.name}</a><br/>
                                    {project.technologies}<br/>
                                    <img src={project.img}/><br/>
                                    <form method="POST" action={`/projects/${project._id}?_method=DELETE`}>
                                        <input type="submit" value={`DELETE THE ${project.name.toUpperCase()}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </>
            </Layout>
        )
    }
}    
module.exports = Index;