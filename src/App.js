import React,{Component} from 'react';
import Watch from './components/watch';
import './components/project.css';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      ms:0,
      s:0,
      m:0,
      h:0,
      ms2:0,
      s2:0,
      m2:0,
      h2:0,
      flag:-1,
    }
  }
  setTime(ms,s,m,h){
    this.setState({
      ms:ms,
      s:s,
      m:m,
      h:h,
    })
  }
  increment(){
    if(this.state.flag){
    if(this.state.m2===60){
      this.state.h2+=1;
      this.state.m2=0;
    }
    if(this.state.s2===60){
      this.state.m2+=1;
      this.state.s2=0;
    }
    if(this.state.ms2===10){
      this.state.s2+=1;
      this.state.ms2=0;
    }
    this.state.ms2+=1;
    this.setTime(this.state.ms2,this.state.s2,this.state.m2,this.state.h2);
  }
}
gettingstarted(){
  this.increment();
  if(this.state.flag){
  setInterval(()=>{this.increment()},100);
  }
}
  start(){
    console.log('coming inside');
    this.setState({
      flag:1,
    })
    this.gettingstarted();
  }
  stop(){
    console.log("going to stop");
    this.setState({
      flag:0,
    })
  }
  render(){
    var {ms,m,s,h,flag}=this.state;
    return(
      <Watch start={this.start.bind(this)} stop={this.stop.bind(this)} ms={ms} sec={s} min={m} hr={h} flag={flag}/>
    );
  }
}

export default App;
