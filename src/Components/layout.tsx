import React,  { Component, ReactNode } from 'react';
import { Container } from 'reactstrap';

interface props {
  children?: ReactNode;
}

export class Layout extends Component<props> {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Container>
        {this.props.children}
        </Container>
      </div>
    );
  }
}
