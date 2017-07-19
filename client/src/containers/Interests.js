import React from 'react';
import {connect} from 'react-redux';
import { CSSGrid, layout, measureItems, makeResponsive } from 'react-stonecutter';

import * as actions from '../actions';

// using react-stonecutter package to handle pinterest-stype grid
const Grid = makeResponsive(measureItems(CSSGrid, { measureImages: true }), {
  maxWidth: 1280,
  minPadding: 100
});


class Interests extends React.Component {

    // fetching data when component is mounted
    componentDidMount() {
        this.props.getInterests();
    }

    // list all - when all interest is clicked
    listAll() {
        this.props.getInterests();
    }
    
    // delete specific interest
    handleDelete(id) {
        this.props.deleteInterest(id);
    }

    // like or dislike button action trigger
    handleLike(id) {
        this.props.likeInterest(id);
    }

    // filtering interests by author
    handleFilter(author) {
        this.props.filterInterests(author);
    }

    // filtering interests by author - authenticated user
    filterMyInterests() {
        this.props.filterInterests(localStorage.getItem('username'));
    }

    // render buttons properly: like, dislike, delete if it is available
    renderButtonsProperly(item) {
        var buttons = [];
        const user = localStorage.getItem('username');


        if(user) {
            buttons.push(<span key={4}>{item.liked.length}</span>)
            if(item.liked.indexOf(user) === -1) {
                buttons.push(<i onClick={() => this.handleLike(item._id)} key={1} className="fa fa-thumbs-o-up" aria-hidden="true"></i>)
            } else {
                buttons.push(<i onClick={() => this.handleLike(item._id)} key={2} className="fa fa-thumbs-o-down" aria-hidden="true"></i>)
            }

            if(item.author === user) {
                buttons.push(<i key={3} onClick={() => this.handleDelete(item._id)} className="fa fa-trash-o" aria-hidden="true"></i>)
            }
            
        }

        return buttons;
    }

    // using data and transform it to html
    renderItems() {
        if(this.props.interests.length) {
            return this.props.interests.map((item) => {
                return (
                    <li key={item._id} className="interest-card">
                        <a target="__blank" href={item.link}><img src={item.img} className="interest-image"/></a>
                        <h4 className="text-center">{item.title}</h4>
                        <div>
                            <div className="author">
                                <a onClick={() => this.handleFilter(item.author)}>{item.author}</a>
                            </div>
                            
                            <div className="buttons text-right">
                                {this.renderButtonsProperly(item)}
                            </div>
                            
                        </div>
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <a onClick={this.listAll.bind(this)}>All Interests</a>
                 {localStorage.getItem('username') ? [<a  onClick={this.filterMyInterests.bind(this)}>My Interests</a>] : []}
                <hr/>
            <Grid
                component="ul"
                columns={5}
                columnWidth={200}
                gutterWidth={20}
                gutterHeight={20}
                layout={layout.pinterest}
                duration={800}
                easing="ease-out"
                >
                {this.renderItems()}
            </Grid>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        interests: state.interests
    };
}



export default connect(mapStateToProps, actions)(Interests);