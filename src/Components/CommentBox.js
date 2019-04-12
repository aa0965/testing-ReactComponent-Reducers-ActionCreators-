import React,{Component} from 'react';
import {connect} from'react-redux';
import * as actions from '../actions';
import RequireAuth from './requireAuth';
class CommentBox extends Component {



state ={comment : ''};

handleChange = (event) =>{
  this.setState({comment: event.target.value})
}
handleSubmit= (event) => {

 event.preventDefault()
 this.props.saveComment(this.state.comment);

  this.setState({comment:''})
}
  render(){
    return(
      <div>

        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange}/>
        <div><button className='save' onClick={this .handleSubmit}>Submit</button>
            <button className='fetch' onClick ={this.props.fetchComment}>Fetch COmmmensts</button>
         </div>
</div>

    )
  }
}



export default connect(null, actions)(RequireAuth(CommentBox));
