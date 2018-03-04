import * as React from 'react';

interface IAnswerProps {
  answer?: string;
}

class Answer extends React.Component<IAnswerProps> {
  public static defaultProps: Partial<IAnswerProps> = {
    answer: '',
  };

  public render() {
    return (
      <div className="square">
        <br />
        {this.props.answer}
      </div>
    );
  }
}

export default Answer;
