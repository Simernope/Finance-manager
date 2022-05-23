
  /*getRate = () => {
      fetch('https://www.cbr-xml-daily.ru/daily_json.js')
          .then(data => {
              return data.json();
          })
          .then(data => {
              console.log(data);
              const dateObject = new Date(data.Date)
              const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
              dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
              dateObject.toLocaleString("en-US", {month: "long"}) // December
              dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
              dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
              dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
              dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
              dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
              dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST
              this.setState(({date: humanDateFormat}))*/
  import React from 'react';
  import './Rate.css';
  import Calc from "../Calc/Calc";
  // import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


  // npm install --save react-router-dom

  class Rate extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              'date': '',
              'currencyRate': {},
              'names': {}
          }
          this.currency = ['USD', 'EUR', 'CAD'];
          this.currency1 = ['0','1','2'];
          this.getRate();

      }
      getRate = () => {
          fetch('https://www.cbr-xml-daily.ru/latest.js')
              .then(data => {
                  return data.json();
              })
              .then(data => {
                  console.log(data);
                  const dateObject = new Date((data.timestamp)*1000)

                  const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
                  dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
                  dateObject.toLocaleString("en-US", {month: "long"}) // December
                  dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
                  dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
                  dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
                  dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
                  dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
                  dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST
                  this.setState(({date: humanDateFormat}))
                  let result = {};
                  for (let i = 0; i< this.currency.length; i++){
                      result[this.currency[i]] = data.rates[this.currency[i]];
                  }
                  console.log(result);
                  this.setState({currencyRate: result});
                  let newresult = {}
                  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                      .then(newdata => {
                          return newdata.json();
                      })
                      .then(newdata => {
                          console.log(newdata)
                          for (let i = 0; i< this.currency.length; i++){
                              newresult[this.currency[i]] = newdata.Valute[this.currency[i]];
                          }
                          console.log(newresult);
                          this.setState(({names: newresult}))
                          console.log(newresult.USD.Value)
                          console.log(result);
                      })
              });

      }
      render() {
          return (
              <div className="rate">
                  <h3> Курс валют на {this.state.date}</h3>
                {/*  <div className="flex-container">
                      {Object.keys(this.state.currencyRate).map((keyName, i)=>(
                          <div className="block flex-item" key={keyName}>
                              <div className="currency-name">{keyName}</div>
                              <div className="currency-in">{(1/(this.state.currencyRate[keyName])).toFixed(0)+" рублей"}</div>
                              <p>* По курсу ЦБ РФ</p>

                          </div>
                      ))}
                  </div>*/}
                  <div className="flex-container">
                      {Object.keys(this.state.names).map((keyName, i)=>(
                          <div className="block flex-item" key={this.state.names[keyName].Name}>
                              <div className="currency-name">{this.state.names[keyName].Name} ({this.state.names[keyName].CharCode})</div>
                              <div className="currency-in">{this.state.names[keyName].Value}</div>
                              <p>* По курсу ЦБ РФ</p>

                          </div>
                      ))}
                  </div>
                  <Calc rate={this.state.currencyRate}/>

              </div>
          );
      }
  }

  export default Rate;