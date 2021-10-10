import React, { Component } from "react";
import Button from 'react-bootstrap/Button'


class ShopButton extends Component {
    render() {
        return (
            <Button variant={this.props.variant}>{this.props.name}</Button>
        )
    }
}

export default ShopButton;