import * as React from 'react';

import Cal from './Calamari.jpg'
import Caesar from './Seahorse.jpg'

import Coral from './Coralreef.jpg'
import Dolph from './Dolphnyugen.jpg'
import Fin from './Finjamin.jpg'
import Finneus from './Finneus.jpg'
import Jeff from './Jeff.jpg'
import Lauryn from './Sharky.jpg'
import Stin from './Stin.jpg'
import Sue from './Sushi.jpg'




interface IPageState {
    currentProfile: any;
    page: string;
    questionsAnswered: number;
}

class Home extends React.Component<{}, IPageState> {
    public offices: any[] = [];
    public interests: any[]  = [];
    public almaMaters: any[]  = [];
    public levels: any[]  = [];

    public answers = ["", "", "", ""];
    public correctAnswer = "";
    public selectedAnswer = "";
    public score = 0;
    

    public correctAnswerNumber = 0;
    public profiles = [{name: "Finjamin Dalgarn", office: "San Francisco", interest: "Learning JS Frameworks", almaMater: "Notre Dame", level: "C1", imageSrc: Fin},
                        {name: "Dolph Nguyen", office: "Seattle", interest: "Playing Guitar", almaMater: "TCU", level: "P1", imageSrc: Dolph},
                        {name: "Lauryn Shark", office: "Dallas", interest: "Rolling Tides", almaMater: "Alabama", level: "V5", imageSrc: Lauryn},
                        {name: "Coraline Reef", office: "New York", interest: "Cooking", almaMater: "Baylor", level: "C2", imageSrc: Coral},
                        {name: "Stin Gray", office: "Chicago", interest: "Working Out", almaMater: "Kashi University", level: "A1", imageSrc: Stin},
                        {name: "Jeff", office: "Philadelphia", interest: "Sixers Games", almaMater: "Temple University", level: "P2", imageSrc: Jeff},
                        {name: "Cal O'Mari", office: "Los Angeles", interest: "Food", almaMater: "Texas A&M", level: "V5", imageSrc: Cal},
                        {name: "Suzanne Shirole", office: "Houston", interest: "Traveling", almaMater: "University of Houston", level: "M3", imageSrc: Sue},
                        {name: "Caesar Horse", office: "Washington D.C", interest: "Politics", almaMater: "BYU", level: "V2", imageSrc: Caesar},
                       {name: "Finneus Gayle", office: "Atlanta", interest: "Kevin Durant", almaMater: "Harvard", level: "M2", imageSrc: Finneus}];

    public flame1Classes = "icon-div col-md-2";
    public flame2Classes = "icon-div col-md-2";
    public flame3Classes = "icon-div col-md-2";
    public flame4Classes = "icon-div col-md-2";

    constructor(p: {}) {
        super(p);
        this.state = {
            currentProfile: this.profiles[0],
            page: "home",
            questionsAnswered: 0,
        }
        this.goToQuiz = this.goToQuiz.bind(this);
        this.goToResults = this.goToResults.bind(this);
        this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
        this.onButton0Pressed = this.onButton0Pressed.bind(this);
        this.onButton1Pressed = this.onButton1Pressed.bind(this);
        this.onButton2Pressed = this.onButton2Pressed.bind(this);
        this.onButton3Pressed = this.onButton3Pressed.bind(this);

        this.constructAnswerLists();
    }

    public constructAnswerLists() {
        this.profiles.forEach(profile => {
            this.offices.push(profile.office);
            this.interests.push(profile.interest);
            this.almaMaters.push(profile.almaMater);
            this.levels.push(profile.level);
        });
    }

    public chooseRandomProfile() {
        const profileNumber = Math.floor(Math.random() * this.profiles.length);
        this.setState({currentProfile: this.profiles[profileNumber]});
    }

    public goToQuiz() {
        this.chooseRandomProfile();
        this.setState({page: "quiz"});
    }
    public goToResults() {
        this.setState({page: "results"});
    }

    public onQuestionAnswered(buttonNum: number) {
        if (buttonNum === this.correctAnswerNumber) {
            this.score += 1;
        }
        this.setState({questionsAnswered: this.state.questionsAnswered + 1});
    }

    public onButton0Pressed() {
        this.selectedAnswer = this.answers[0];
        this.onQuestionAnswered(0);
    }
    public onButton1Pressed() {
        this.selectedAnswer = this.answers[1];
        this.onQuestionAnswered(1);
    }
    public onButton2Pressed() {
        this.selectedAnswer = this.answers[2];
        this.onQuestionAnswered(2);
    }
    public onButton3Pressed() {
        this.selectedAnswer = this.answers[3];
        this.onQuestionAnswered(3);
    }

    public clearAnswers() {
        this.answers = ["", "", "", ""];
    }

    public isItemInList(item: any, list: any[]) {
        for (const listItem of list) {
            if (item === listItem) {
                return true;
            }
        }
        return false;
    }


    public fillInAnswers() {
        if (this.state.questionsAnswered === 0) {
            this.fillInCorrectAnswer();

            const correctAnswer = this.correctAnswer;
            const possibleAnswers = this.offices;
            possibleAnswers.splice(possibleAnswers.findIndex(answer => {
                return answer === correctAnswer;
            }), 1);
            const shuffledAnswers = possibleAnswers.sort(() => .5 - Math.random());
            let j = 0;

            for (let index = 0; index < this.answers.length; index++) {
                if (index !== this.correctAnswerNumber) {
                    this.answers[index] = shuffledAnswers[j];
                    j++;
                }
            }
        }
        else if (this.state.questionsAnswered === 1) {
            this.fillInCorrectAnswer();

            const correctAnswer = this.correctAnswer;
            const possibleAnswers = this.interests;
            possibleAnswers.splice(possibleAnswers.findIndex(answer => {
                return answer === correctAnswer;
            }), 1);
            const shuffledAnswers = possibleAnswers.sort(() => .5 - Math.random());
            let j = 0;

            for (let index = 0; index < this.answers.length; index++) {
                if (index !== this.correctAnswerNumber) {
                    this.answers[index] = shuffledAnswers[j];
                    j++;
                }
            }
        }
        else if (this.state.questionsAnswered === 2) {
            this.fillInCorrectAnswer();

            const correctAnswer = this.correctAnswer;
            const possibleAnswers = this.almaMaters;
            possibleAnswers.splice(possibleAnswers.findIndex(answer => {
                return answer === correctAnswer;
            }), 1);
            const shuffledAnswers = possibleAnswers.sort(() => .5 - Math.random());
            let j = 0;

            for (let index = 0; index < this.answers.length; index++) {
                if (index !== this.correctAnswerNumber) {
                    this.answers[index] = shuffledAnswers[j];
                    j++;
                }
            }
        }
        else if (this.state.questionsAnswered === 3) {
            this.fillInCorrectAnswer();

            const correctAnswer = this.correctAnswer;
            const possibleAnswers = this.levels;
            possibleAnswers.splice(possibleAnswers.findIndex(answer => {
                return answer === correctAnswer;
            }), 1);
            const shuffledAnswers = possibleAnswers.sort(() => .5 - Math.random());
            let j = 0;

            for (let index = 0; index < this.answers.length; index++) {
                if (index !== this.correctAnswerNumber) {
                    this.answers[index] = shuffledAnswers[j];
                    j++;
                }
            }
        }
    }

    public fillInCorrectAnswer() {
        this.correctAnswerNumber = Math.floor(Math.random() * 4);
        
        if (this.state.questionsAnswered === 0) {
            this.correctAnswer = this.state.currentProfile.office;
            this.answers[this.correctAnswerNumber] = this.correctAnswer;
        }
        else if (this.state.questionsAnswered === 1) {
            this.correctAnswer = this.state.currentProfile.interest;
            this.answers[this.correctAnswerNumber] = this.correctAnswer;
        }
        else if (this.state.questionsAnswered === 2) {
            this.correctAnswer = this.state.currentProfile.almaMater;
            this.answers[this.correctAnswerNumber] = this.correctAnswer;
        }
        else if (this.state.questionsAnswered === 3) {
            this.correctAnswer = this.state.currentProfile.level;
            this.answers[this.correctAnswerNumber] = this.correctAnswer;
        }        
    }

    public renderQuiz() {
        let progressClass = "";
        let questionBeingAsked = "";
        const questions = ["What home office is this Fin in?", "What is this Fin interested in?", "What is this Fin's alma mater?", "What level is this Fin?"];

        if (this.state.questionsAnswered === 0) {
            progressClass = "progress-bar";
            questionBeingAsked = questions[0];
        }
        else if (this.state.questionsAnswered === 1) {
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

        this.fillInAnswers();

        return (
            <div className="App background">
                <div className="container">
                    <div>
                        <h1 className="name-div text-center mt-5">{this.state.currentProfile.name}</h1>
                    </div>
                    <div className="text-center m-5">
                        <img src={this.state.currentProfile.imageSrc} className="img-custom img-fluid img-thumbnail" />
                    </div>

                    <div className="progress m-2">
                        <div id="progress-bar" className={progressClass} role="progressbar" />
                        {/* <ProgressBar now={60} />; */}
                    </div>

                    <div className="question-div text-center m-3">
                        <h2>{questionBeingAsked}</h2>
                    </div>
                    <div className="mt-1 mb-5">
                        <button id="answer-1" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onButton0Pressed}>{this.answers[0]}</button>
                        <button id="answer-2" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onButton1Pressed}>{this.answers[1]}</button>
                        <button id="answer-3" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onButton2Pressed}>{this.answers[2]}</button>
                        <button id="answer-4" type="button" className="btn btn-outline-light btn-block answer-button" onClick={this.onButton3Pressed}>{this.answers[3]}</button>
                    </div>
                    {/* <div className="text-right">
                        <button type="button" className="btn btn-outline-light" onClick={this.goToResults}> FINISH <i className="fas fa-caret-right"/></button>

                    </div> */}
                </div>
            </div>
        );
    }

    public renderResults(){
        const progressClass = "progress-bar progress-100-percent";
        
        if (this.score < 1) {
            this.flame1Classes += " invisible-flame";
        }
        if (this.score < 2) {
            this.flame2Classes += " invisible-flame";
        }
        if (this.score < 3) {
            this.flame3Classes += " invisible-flame";
        }
        if (this.score < 4) {
            this.flame4Classes += " invisible-flame";
        }

        return (
            <div className = "App background">
                <div className="container">
                <div>
                        <h1 className="name-div text-center mt-5">{this.state.currentProfile.name}</h1>
                    </div>
                    <div className="text-center m-5">
                        <img src={this.state.currentProfile.imageSrc} className="img-custom img-fluid img-thumbnail" />
                    </div>
        <div>
    
        <div className="progress m-2">
                        <div id="progress-bar" className={progressClass} role="progressbar" />
                        {/* <ProgressBar now={60} />; */}
                    </div>
    
        </div>
        <div className="question-div text-center m-3">
         
            <h1>Final Lit Score: {this.score}</h1>
        </div>
        <div className="row">
            <div className="col-md-2"/>
            <div id="flame1" className={this.flame1Classes}>
                {/* <img src={Fire}/> */}
                <i className="fab fa-gripfire" />

            </div>
            <div id="flame2" className={this.flame2Classes}>
                {/* <img src={Fire} /> */}
                <i className="fab fa-gripfire" />

            </div>
            <div id="flame3" className={this.flame3Classes}>
                {/* <img src={Fire} /> */}
                <i className="fab fa-gripfire" />

            </div>
            <div id="flame4" className={this.flame4Classes}>
                {/* <img src={Fire} /> */}
                <i className="fab fa-gripfire" />

            </div>

            <div className="col-md-2"/>
        </div>
        <div className="text-center m-5">
            <a type="button" className="btn btn-custom btn-lg" href="home.html"> TAKE ME HOME <i className="fas fa-caret-right"/></a>

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
                            <h1>Finna Get Lit! </h1>
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
                                {/* <a type="button" className="btn btn-default btn-lg btn-block">View Stats</a> */}
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