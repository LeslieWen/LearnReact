import React,{Component}from 'react'
import axios from 'axios'
import {Link}from 'react-router-dom'
import Pizza from '../Pizza_(Primitive_Plus).png'
import { connect } from 'react-redux'
class Home extends Component{  

    render(){
        console.log(this.props)
        const{posts}=this.props;
        const postList=posts.length ? (
           posts.map(post=>{
               return(
                <div className="post card" key={post.id}>
                <img src={Pizza} alt="a pizza"/>
                <div className="card-content">
                <Link to={'/'+post.id}>
                <span className="card-title">{post.title}</span>
                </Link>
                <p>{post.body}</p>
                </div>
                </div>
               )
           }) 
        ): (
            <div classname="center">No posts yet</div>
        )
        return(
        <div className="container">
        <h4 className="center">Home</h4>
        {postList}
        </div>
    )}
}
const mapStateToProps=(state)=>{
    return{
        posts: state.posts // state of store get state property
    }
}
export default connect(mapStateToProps)(Home)