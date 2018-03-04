import * as React from 'react';

interface ICategoryProps {
  category?: string;
}

class Category extends React.Component<ICategoryProps> {
  public static defaultProps: Partial<ICategoryProps> = {
    category: '',
  };

  public render() {
    return (
      <div className="square">
        <br />
        {this.props.category}
      </div>
    );
  }
}

export default Category;
