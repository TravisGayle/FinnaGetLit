import * as React from 'react';
import './App.css';


class App extends React.Component {
  public render() {
    return this.renderQuizPage();
  }

  public renderHome() {
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
              <a type="button" className="btn btn-default btn-lg btn-block" href="quiz.html">Take Quiz</a>
              <a type="button" className="btn btn-default btn-lg btn-block">View Stats</a>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    )
  }
  public renderQuizPage() {
    return (
      <div className="App background">
        <div className="container">
          <div>
            <h1 className="name-div text-center mt-5">Finjamin Dalgarn</h1>
          </div>
          <div className="text-center m-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/2560px-Tursiops_truncatus_01.jpg" className="img-custom img-fluid" />
          </div>

          <div className="progress m-2">
            <div id="progress-bar" className="progress-bar" role="progressbar" />
          </div>

          <div className="question-div text-center m-3">
            <h2>What market is Finjamin Dalgarn in?</h2>
          </div>
          <div className="mt-1 mb-5">
            <button id="answer-1" type="button" className="btn btn-outline-light btn-block">answer 1</button>
            <button id="answer-2" type="button" className="btn btn-outline-light btn-block answer-button" />
            <button id="answer-3" type="button" className="btn btn-outline-light btn-block answer-button" />
            <button id="answer-4" type="button" className="btn btn-outline-light btn-block answer-button" />
          </div>
        </div>
      </div>

    )
  }
}

export default App;
