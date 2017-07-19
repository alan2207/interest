import React from 'react';

export default function(props) {
    return (
        <div>
            <h1>About</h1>

            <p>This is a fullstack web application, built using the MERN stack. It was made as a part of FreeCodeCamp's Backend Curriculum.</p>
            <p>The frontend and the backend are completely separated, which makes it easy to integrate the app with other frontends.</p>

            <h2>User Stories:</h2>

            <ul>
                <li>I can create account and log in. </li>
                <li>I can modify it's info and password.</li>
                <li>As an authenticated user I can create interests, link them to images and external links</li>
                <li>I can view wall of all interests created by all users.</li>
                <li>I can view wall of interests by a specific user.</li>
                <li>I can view intersts created by me.</li>
                <li>I can delete interests created by me.</li>
                <li>As an authenticated user I can like or dislike interests.</li>
            </ul>

            <h2>Technologies Used:</h2>
            <h3>Frontend:</h3>
            <p>Bootstrap, React, Redux, React Router, Redux Thunk, Redux Form, Axios, Webpack, Babel</p>

            <h3>Backend:</h3>
            <p>Node, Express, MongoDB, Mongoose, Passport with JWT authentication</p>

            <a href="https://github.com/alan2207/interest" target="_blank">Repository</a>
        </div>
    )
}