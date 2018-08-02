import * as React from 'react';
// import Fire from './Fire.png'

// interface HomeInterface{

// }

interface IPageState {
    page: string;
    questionsAnswered: number;
    // questions: Array<string>;
}

class Home extends React.Component<{}, IPageState> {
    constructor(p: {}) {
        super(p);
        this.state = {
            page: "home",
            questionsAnswered: 0,
        }
        this.goToQuiz = this.goToQuiz.bind(this);
        this.goToResults = this.goToResults.bind(this);
        this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
    }

    public goToQuiz() {
        this.setState({page: "quiz"});
    }
    public goToResults() {
        this.setState({page: "results"});
    }

    public onQuestionAnswered() {
        this.setState({questionsAnswered: this.state.questionsAnswered + 1})
    }

    public renderQuiz() {
        let progressClass = "";
        let questionBeingAsked = "";
        const questions = ["What home office is this Fin in?", "What is this Fin interested in?", "What is this Fin's alma mater?", "What level is this Fin?"];

        if (this.state.questionsAnswered === 0) {
            progressClass = "progress-bar";
            questionBeingAsked = questions[0];
        }
        if (this.state.questionsAnswered === 1) {
            progressClass = "progress-bar progress-25-percent";
            questionBeingAsked = questions[1];
        }
        else if (this.state.questionsAnswered === 2) {
            progressClass = "progress-bar progress-50-percent";
            questionBeingAsked = questions[2];
        }
        else if (this.state.questionsAnswered === 3) {
            progressClass = "progress-bar progress-75-percent";
            questionBeingAsked = questions[3];
        }
        else if (this.state.questionsAnswered === 4) {
            progressClass = "progress-bar progress-100-percent";
        }
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
                        <div id="progress-bar" className={progressClass} role="progressbar" />
                        {/* <ProgressBar now={60} />; */}
                    </div>


                    <div className="question-div text-center m-3">
                        <h2>{questionBeingAsked}</h2>
                    </div>
                    <div className="mt-1 mb-5">
                        <button id="answer-1" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onQuestionAnswered}> Choice 1 </button>
                        <button id="answer-2" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onQuestionAnswered}> Choice 2 </button>
                        <button id="answer-3" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onQuestionAnswered}> Choice 3 </button>
                        <button id="answer-4" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onQuestionAnswered}> Choice 4 </button>
                    </div>
                    <div className="text-right">
                        <button type="button" className="btn btn-outline-light" onClick={this.goToResults}> NEXT <i className="fas fa-caret-right"/></button>

                    </div>
                </div>
            </div>
        );
    }

    public renderResults(){
        const progressClass = "progress-bar progress-100-percent";
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
                        <div id="progress-bar" className={progressClass} role="progressbar" />
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
        else if (this.state.page === "quiz" && this.state.questionsAnswered < 4) {
            return this.renderQuiz();
        }
        else{
            return this.renderResults();
        }
    }
}

export default Home;