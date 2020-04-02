import React from "react";
import Card from "../Card/Card";
import "./Modal.css";
export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <Card className="modal" id="modal">
                <h2>Notice!</h2>
                <div className="content">{this.props.message}</div>
                <div className="actions">

                    <button className="toggle-button" onClick={this.onClose}>
                        Close
                    </button>
                </div>
            </Card>
        );
    }
}