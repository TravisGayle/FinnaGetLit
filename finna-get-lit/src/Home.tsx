import * as React from 'react';

class Home extends React.Component {
    public render() {
        return (
            <div className="App background">
                <div className="container">
                    <div className="header-div">
                        <h1>Welcome, Ben! </h1>
                    </div>
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="icon-div col-md-6">
                            <i className="fab fa-gripfire" />
                        </div>
                        <div className="col-md-3" />
                    </div>
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="main-div col-md-6 ">
                            <a type="button" className="btn btn-default btn-lg btn-block">Take Quiz</a>
                            <a type="button" className="btn btn-default btn-lg btn-block">View Stats</a>
                        </div>
                        <div className="col-md-3" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;