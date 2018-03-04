import * as React from 'react';

interface IQuestionProps {
  question?: string;
}

class Question extends React.Component<IQuestionProps> {
  public static defaultProps: Partial<IQuestionProps> = {
    question: '',
  };

  public render() {
    return (
      <div className="square">
        <br />
        {this.props.question}
      </div>
    );
  }
}

export default Question;
