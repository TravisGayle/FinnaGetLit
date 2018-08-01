import * as React from 'react';
import './App.css';
import Home from "./Home";
import Quiz from "./Quiz";

interface InterfaceState {
  showHome: boolean;
  showQuiz: boolean;
}

class App extends React.Component<{}, InterfaceState> {
  constructor(p: any) {
    super(p);
    this.state = {showHome: true, showQuiz: false};
  }

  public render() {
    let content = <Home/>;
    if (this.state.showHome === true) {
      content = <Home/>;
    }
    else if (this.state.showQuiz === true) {
      content = <Quiz/>;
    }
    
    return(
    <div>



      {content}
    </div>
    );
  }

}

export default App;
