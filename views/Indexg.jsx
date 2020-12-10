const React = require('react');
const Layout = require('./layout/Layout.jsx');


class Indexg extends React.Component{
    render() {
        const {name, leaveAComment, _id } = this.props.guestbook;
        return(
            <Layout>
            <ul className="indexg-page">
            <h1>
                Guestbook<br/>
                Make sure to leave a comment/review so we can stay in touch.<br/>
                Thanks for visiting me.
            </h1>
                <li>
                    <form action="/guestbook" method="POST">
                    Name: <input type="text" name="name" /><br/>
                    Leave a comment: <input type="text" name="comment" /><br/>
                    <input type="submit" id="createComment" name="" value="Create Comment"/>
                    </form>
                </li>
            </ul>
            </Layout>
        ) 
    }
}


module.exports = Indexg;

