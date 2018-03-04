import * as React from 'react';
import './App.css';
import Category from './category';
import DollarValue from './dollarValue';
import Question from './question';
import Answer from './answer';
import NextButton from './nextButton';

class App extends React.Component {
 public state = { 
   answer: '', 
   category: 'CATEGORY', 
   dollarValue: 0, 
   label: 'Show Answer',
   question: '', 
   showAnswer: false, 
  };

 public render() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td><Category category={this.state.category}/></td>
            <td><DollarValue value={this.state.dollarValue} /></td>
          </tr>
          <tr>
            <td><Question question={this.state.question} /></td>
            <td>{this.state.showAnswer ? <Answer answer={this.state.answer} /> : null}</td>
          </tr> 
          <tr>
            <td><NextButton label={this.state.label} onClick={this.onClick}/></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }

  public componentWillMount() {
    this.onClick();
  }

  private onClick = () => {
    if (this.state.showAnswer) {
      fetch('http://jservice.io/api/random')
      .then((results) => {
        return results.json();
      }).then(data => {
        this.setState({
          category: data[0].category.title.toUpperCase(),
          dollarValue: data[0].value,
          question: data[0].question,
          answer: data[0].answer,
          label: 'Show Answer',
          showAnswer: false
        });
      });
    } else {
      this.setState({
        showAnswer: true,
        label: 'Next Question...',
      });
    }
  }
}

export default App as React.ComponentClass<{}>;
