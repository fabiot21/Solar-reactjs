import React, { Component } from 'react';
import './App.css';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Logo from './logo.png'

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    data1: [
      {name: '01:00', grafico1: 13},
      {name: '02:00', grafico1: 25},
      {name: '03:00', grafico1: 2},
      {name: '04:00', grafico1: 24},
      {name: '05:00', grafico1: 13},
      {name: '06:00', grafico1: 5},
      {name: '07:00', grafico1: 10},
      {name: '08:00', grafico1: 7},
      {name: '09:00', grafico1: 12},
      {name: '10:00', grafico1: 2},
    ],
    data2: [
      {name: '01:00', grafico2: 31},
      {name: '02:00', grafico2: 15},
      {name: '03:00', grafico2: 20},
      {name: '04:00', grafico2: 12},
      {name: '05:00', grafico2: 5},
      {name: '06:00', grafico2: 7},
      {name: '07:00', grafico2: 10},
      {name: '08:00', grafico2: 9},
      {name: '09:00', grafico2: 1},
      {name: '10:00', grafico2: 7},
    ],
    data3: [
      {name: '01:00', grafico3: 13},
      {name: '02:00', grafico3: 25},
      {name: '03:00', grafico3: 20},
      {name: '04:00', grafico3: 12},
      {name: '05:00', grafico3: 29},
      {name: '06:00', grafico3: 18},
      {name: '07:00', grafico3: 9},
      {name: '08:00', grafico3: 24},
      {name: '09:00', grafico3: 7},
      {name: '10:00', grafico3: 9},
    ],
    data4: [
      {name: '01:00', grafico4: 21},
      {name: '02:00', grafico4: 23},
      {name: '03:00', grafico4: 21},
      {name: '04:00', grafico4: 16},
      {name: '05:00', grafico4: 19},
      {name: '06:00', grafico4: 15},
      {name: '07:00', grafico4: 10},
      {name: '08:00', grafico4: 9},
      {name: '09:00', grafico4: 14},
      {name: '10:00', grafico4: 15},
    ]
  }
}

componentDidMount() {

}


  render() {
    return (
      <div>
        <img src={Logo}></img>
        <div className="row">
          <LineChart className="col s6" width={700} height={270} data={this.state.data1}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="grafico1" stroke="#cc3131" />
          </LineChart>
          <LineChart className="col s6" width={700} height={270} data={this.state.data2}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="grafico2" stroke="#00ced1" />
          </LineChart>
        </div>
        <div className="row">
          <LineChart className="col s6" width={700} height={270} data={this.state.data3}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="grafico3" stroke="#42ca9d" />
          </LineChart>
          <LineChart className="col s6" width={700} height={270} data={this.state.data4}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey="grafico4" stroke="#d4d2ff" />
          </LineChart>
        </div>

      </div>
    );
  }
}

export default App;
