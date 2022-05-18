class Machine extends React.Component {
    render() {
        let msg;
        if (this.props.s1 == this.props.s2 && this.props.s2 == this.props.s3) {
            msg = "You Win!"
        } else {
            msg = "You Lose!"
        }
        return (
            <div>
                <h3> {this.props.s1} {this.props.s2} {this.props.s3}</h3>
                {msg}
            </div>
        )
    }
}
