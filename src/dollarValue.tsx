import * as React from 'react';

interface IDollarValueProps {
  value?: number;
}

class DollarValue extends React.Component<IDollarValueProps> {
  public static defaultProps: Partial<IDollarValueProps> = {
    value: 0,
  };

  public render() {
    return (
      <div className="square">
        <br />
        ${this.props.value}
      </div>
    );
  }
}

export default DollarValue;
