import * as React from 'react';

class Quiz extends React.Component {
    public render() {
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
                </div>
            </div>
        );
    }
}

export default Quiz;