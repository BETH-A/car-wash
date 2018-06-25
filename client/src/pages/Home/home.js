import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../../components/Navbar';
import Jumbotron from '../../components/Jumbotron';
import Carousel from '../../components/Carousel';
import TextArea from '../../components/TextArea';
import Video from '../../components/Video';
import ScheduleBtn from '../../components/ScheduleBtn';

class App  extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Jumbotron />
                <Carousel />
                <TextArea />
                <ScheduleBtn />
                <Video />
            </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector('.container'));