import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';
import '@blueprintjs/core/dist/blueprint.css';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = { text: "" }
    }

    onChange = (text) => {
        this.setState({text: text});
    }

    compile = () => {
        
    }

    render() {
        return (
            <div className="editor container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <label className="pt-label">
                            <h4>Contract Name</h4>
                            <input className="pt-input pt-fill" type="text" placeholder="Contract Name" dir="auto" />
                        </label>
                    </div>
                    <div className="col-sm-4">
                        <label className="pt-label">
                            <h4>Contract Address</h4>
                            <input className="pt-input pt-fill" type="text" placeholder="0x123" dir="auto" />
                        </label>
                    </div>

                    <div className="col-sm-4">
                        <label className="pt-label">
                            <h4></h4>
                            <Button onClick={this.compile} className="pt-large pt-minimal pt-intent-primary pt-icon-add">Verify and Publish</Button>
                        </label>
                    </div>

                    <div className="col-sm-4 pt-align-right"></div>
                </div>

                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="pt-card col-sm-8">
                        <h4>Smart Contract Source Code</h4>
                        <AceEditor
                            mode="javascript"
                            theme="github"
                            width={`${(this.state.windowWidth / 2) - 10}px`}
                            value={this.state.text}
                            onChange={this.onChange}
                            name="editor"
                            editorProps={{ $blockScrolling: false }}
                        />
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        );
    }
}

export default Editor;
