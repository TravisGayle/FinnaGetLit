import * as React from 'react';
// import Fire from './Fire.png'

// interface HomeInterface{

// }

interface IPageState {
    page: string;
}

class Home extends React.Component<{}, IPageState> {
    constructor(p: {}) {
        super(p);
        this.state = {
            page: "home"
        }
        this.goToQuiz = this.goToQuiz.bind(this);
        this.goToResults = this.goToResults.bind(this);
    }

    public goToQuiz() {
        this.setState({page: "quiz"});
    }
    public goToResults() {
        this.setState({page: "results"});
    }

    public renderQuiz() {
        return (
            <div className="App background">
                <div className="container">
                    <div>
                        <h1 className="name-div text-center mt-5">Finjamin Dalgarn</h1>
                    </div>
                    <div className="text-center m-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/2560px-Tursiops_truncatus_01.jpg" className="img-custom img-fluid img-thumbnail" />
                    </div>

                    <div className="progress m-2">
                        <div id="progress-bar" className="progress-bar" role="progressbar" />
                        {/* <ProgressBar now={60} />; */}
                    </div>


                    <div className="question-div text-center m-3">
                        <h2>What market is Finjamin Dalgarn in?</h2>
                    </div>
                    <div className="mt-1 mb-5">
                        <button id="answer-1" type="button" className="btn btn-outline-light btn-block answer-button" > Choice 1 </button>
                        <button id="answer-2" type="button" className="btn btn-outline-light btn-block answer-button" > Choice 2 </button>
                        <button id="answer-3" type="button" className="btn btn-outline-light btn-block answer-button" > Choice 3 </button>
                        <button id="answer-4" type="button" className="btn btn-outline-light btn-block answer-button" > Choice 4 </button>
                    </div>
                    <div className="text-right">
                        <button type="button" className="btn btn-outline-light" onClick={this.goToResults}> NEXT <i className="fas fa-caret-right"/></button>

                    </div>
                </div>
            </div>
        );
    }

    public renderResults(){
        return (
            <div className = "App background">
                <div className="container">
        <div>
            <h1 className="name-div text-center mt-5">Ben Fin</h1>
        </div>
        <div className="text-center m-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/2560px-Tursiops_truncatus_01.jpg" className="img-custom img-fluid img-thumbnail" />
                    </div>
        <div>
    
        <div className="progress m-2">
                        <div id="progress-bar" className="progress-bar" role="progressbar" />
                        {/* <ProgressBar now={60} />; */}
                    </div>
    
        </div>
        <div className="question-div text-center m-3">
         
            <h1>Final Lit Score:</h1>
        </div>
        <div className="row">
            <div className="col-md-2"/>
            <div id="flame1" className="icon-div col-md-2">
                {/* <img src={Fire}/> */}
                <i className="fab fa-gripfire" />

            </div>
            <div id="flame2" className="icon-div col-md-2">
                {/* <img src={Fire} /> */}
                <i className="fab fa-gripfire" />

            </div>
            <div id="flame3" className="icon-div col-md-2">
                {/* <img src={Fire} /> */}
                <i className="fab fa-gripfire" />

            </div>
            <div id="flame4" className="icon-div col-md-2">
                {/* <img src={Fire} /> */}
                <i className="fab fa-gripfire" />

            </div>

            <div className="col-md-2"/>
        </div>
        <div className="text-center m-5">
            <a type="button" className="btn btn-custom btn-lg" href="home.html">Take Me Home</a>

        </div>
    </div>
    </div>
    
        );
    }

    public render() {
        if (this.state.page === "home") {
            return (
                <div className="App background">
                    <div className="container">
                        <div className="header-div">
                            <h1>Welcome, Ben! </h1>
                        </div>
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="icon-divMain col-md-6">
                                <i className="fab fa-gripfire" />
                            </div>
                            <div className="col-md-3" />
                        </div>
                        <div className="row">
                            <div className="col-md-3" />
                            <div className="main-div col-md-6 ">
                                <a type="button" className="btn btn-default btn-lg btn-block" onClick={this.goToQuiz}>Take Quiz</a>
                                <a type="button" className="btn btn-default btn-lg btn-block">View Stats</a>
                            </div>
                            <div className="col-md-3" />
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.page === "quiz") {
            return this.renderQuiz();
        }
        else{
            return this.renderResults();
        }
    }
}

export default Home;