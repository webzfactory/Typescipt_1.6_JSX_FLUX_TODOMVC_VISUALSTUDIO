import * as React from "react/addons";

interface BrickProps {
    name: string;
}

interface BrickState {
    name: string;
}

class HelloMessage extends React.Component<BrickProps, BrickState>{
    constructor(props: BrickProps) {
        super(props);
    }

    render() {
        return <div>Hello {this.props.name}</div>;
    }
}
