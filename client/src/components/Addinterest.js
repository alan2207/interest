import React from 'react';
import axios from 'axios';

import {ROOT_URL} from '../../config'

// component for adding new interests
class Addinterest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            link: '',
            title: ''
        };
    }

    // setting states to input values

    handleImgInput(e) {
        this.setState({imgUrl: e.target.value});
    }

    handleLinkInput(e) {
        this.setState({link: e.target.value});
    }

    handleTitleInput(e) {
        this.setState({title: e.target.value});
    }

    // if image link url is invalid, set it to the default url
    addDefaultSrc(e) {
        this.setState({imgUrl: 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg'});
    }

    handleSubmit(e) {
        e.preventDefault();
        const img = this.state.imgUrl;
        const link = this.state.link;
        const title = this.state.title;

        axios.post(`${ROOT_URL}/interests/add`, {img, link, title}, {headers: {
            authorization: localStorage.getItem('token')
        }})
            .then((response) => alertify.success('Added!'))
    }


    render() {

        return(
            <div>
                <h2 className="text-center">Add Interest</h2>

                
                <div className="row">
                        <div className="form-group col-md-8 col-md-offset-2">
                            <h3>Preview:</h3>
                            <div  id="image-preview">
                                <img onError={this.addDefaultSrc.bind(this)}  id="img-prev" src={this.state.imgUrl} />
                            </div>
                        </div>
                </div>
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="form-group col-md-8 col-md-offset-2">
                        <label  htmlFor="image-url">Image Url</label>
                        <input onChange={this.handleImgInput.bind(this)} type="url" id="image-url" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-8 col-md-offset-2">
                        <label  htmlFor="link">Link</label>
                        <input required onChange={this.handleLinkInput.bind(this)} type="url" id="link" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-8 col-md-offset-2">
                        <label htmlFor="title">Title</label>
                        <input required onChange={this.handleTitleInput.bind(this)} type="text" id="title" className="form-control" />
                        </div>
                    </div>

                     <div className="text-center">
                        <button type="submit" className="btn btn-default">Add</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Addinterest;
