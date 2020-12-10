const React = require("react");

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>My Portfolio App</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <nav>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href={"/home"}>Home</a></li>
                            <li><a href={'/projects'}>Projects</a></li><br/>
                            <li><a href={'/guestbook'}>Guestbook</a></li><br/>
                        </ul>
                    </nav>
                    {this.props.children}

                    <footer>
                        copyright Dilya Joseph
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = Layout;