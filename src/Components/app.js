import React from 'react';
import {Route,Link} from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from '../actions';
import { connect} from 'react-redux';



class App extends React.Component{
renderbutton(){
  if(this.props.auth){
  return (<button onClick={()=> {this.props.changeauth(false); console.log('signout');}}>signout</button>);
}
else {return(<button onClick = {()=> {this.props.changeauth(true); console.log('signined')}}>signin</button>)
}}
renderHeader(){
    return(
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/post'>comment</Link></li>
        <li>{this.renderbutton()}</li>
      </ul>
    );
  }
  render(){
  return (
<div>{this.renderHeader()}
  <Route path='/post' exact component={CommentBox} />
  
  <Route path='/' exact component={CommentList} />
</div>

)
}
}

function mapStateToProps(state){
  return{auth:state.auth}
}

export default connect(mapStateToProps,actions)(App);
