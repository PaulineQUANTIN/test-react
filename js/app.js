class App extends React.Component {
    state = { 
        // comments: [],
        comments: [],
        name : "",
        message : "",
    }

    handleName = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleComment = event => {
        this.setState({
           message: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let comment = {
            "name": this.state.name,
            "message": this.state.message
        }
        this.setState({
            comments: this.state.comments.concat(comment)
        })
        console.log(this.state.comments)
    }        
    
    render() { 
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <p className="form__description">Say something</p>
                <input className="form__name" type="text" placeholder="Your name" value={this.state.name} onChange={this.handleName}/>
                <textarea className="form__textarea" placeholder="Your comment" value={this.state.message} onChange={this.handleComment}></textarea>
                <input className="form__button" type="submit" value="comment"/>
            </form>
        );
    }
}
 
ReactDOM.render(<App/>,document.getElementById("app"));