import React,{Component} from 'react';
import './project.css';

class App extends Component{
  calling(event){
    event.preventDefault();
    const {start}=this.props;
    start();
  }
  stopping(event){
    event.preventDefault();
    const {stop}=this.props;
    stop();
  }
  render(props){
    var {ms,sec,min,hr,flag}=this.props;
    const st="Start";
    const rs="Resume";
    const pa="Pause";
    return(
      <div className="container-fluid">
      <div className="row">
      <div className="col-xs-3">
      </div>
      <div className="col-xs-6 bgdiv">
      <h1 className="watch-head">StopWatch</h1>
      <div className="watch">
      <h1 className="watch-digit">{hr>9?hr:"0"+hr}:{min>9?min:"0"+min}:{sec>9?sec:"0"+sec}:{ms>9?ms:"0"+ms}</h1>
      <font className="font1">HOURS</font>
      <font className="font2">MINUTES</font>
      <font className="font3">SECONDS</font>
      <font className="font4">MILLISECONDS</font>
      </div><br/><br/>
      <div className="row">
      <div className="col-xs-2">
      </div>
      <div className="col-xs-4">
      <button className="btn btn-info form-control btn1" onClick={this.calling.bind(this)}>{flag==-1?st:rs}</button>
      </div>
      <div className="col-xs-4">
      <button className="btn btn-info form-control btn1" onClick={this.stopping.bind(this)}>Stop</button>
      </div>
      </div>
      <br/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
