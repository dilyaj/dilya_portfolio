const React = require('react');
const Layout = require('./layout/Layout.jsx');


class Indexg extends React.Component{
    render() {
        return(
            <Layout>
            <ul className="indexg-page">
            <h1>
                Guestbook<br/>
                Thanks for visiting me. Make sure to leave a comment/review so we can stay in touch.
            </h1>
                {
                    this.props.guestbook.map((project) => {
                        return (
                            <li>
                            <form action="/guestbook" method="POST">
                                Name: <input type="text" name="name" /><br/>
                                Leave a comment: <input type="text" name="comment" /><br/>
                                <input type="submit" id="createComment" name="" value="Create Comment"/>
                                </form>
                            </li>
                        )
                    })
                }
            </ul>
            </Layout> 
        )
    }
}

module.exports = Indexg;

