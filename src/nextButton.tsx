import * as React from 'react';

interface INextButtonProps {
  label?: string;
  onClick?: () => void; // Promise<string>;
}

class NextButton extends React.Component<INextButtonProps> {
  public static defaultProps: Partial<INextButtonProps> = {
    label: 'Show Answer',
  };

  public render() {
    return (
      <button onClick={this.props.onClick}> 
        {this.props.label}
      </button>
    );
  }
}

export default NextButton;
