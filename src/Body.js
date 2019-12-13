import React, { Component } from 'react';
import List from './List';
import Image from './Image';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Framework JS Terbaik 2018</h1>
        <Image link="https://www.yudana.id/wp-content/uploads/2018/04/javascript-788x394.jpg" tinggi="300" lebar="500" />
      </div>
    )
  }
}

export class Content extends Component {
  constructor(props){
    super(props);
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(value){
    alert(value)
  }

  render() {
    return (
      <div>
        <h2><a href="https://avatars2.githubusercontent.com/u/499550?s=460&v=4" onClick={()=>this.handleAlert("Evan You")}>Teknologi Populer JS</a></h2>
          <List name="Vue.js" creator="Evan You" site="https://vuejs.org/"/>
          <Image link="https://cdn.shopify.com/s/files/1/0533/2089/files/vuejs-tutorial_2d2a853c-aa2f-44b0-80df-933b495f77f8.png?v=1509478492" tinggi="200" lebar="350" />
          <List name="React.js" creator="Jordan Walke" site="https://reactjs.org/" />
          <Image link="https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" tinggi="200" lebar="350" />
          <List name="Ember.js" creator="Yehuda Katz" site="https://www.emberjs.com/" />
          <Image link="https://cdn-images-1.medium.com/max/1600/1*--wRIhx_atl50C4NlkMY5Q.jpeg" tinggi="200" lebar="350" />
          <List name="Angular" creator="Misko Hevery" site="https://angularjs.org/"/>
          <Image link="http://blog.creative-tim.com/wp-content/uploads/2017/03/AngularJS-e1487056257254-730x410.png" tinggi="200" lebar="350" />
          <List name="Meteor.js" creator="Meteor Development Group" site="https://www.meteor.com/" />
          <Image link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpWuAbsjJjht7xWiu6Gbzaa1NX4zZ0Js6X-iEwS_qb6-8na5x" tinggi="200" lebar="350" />
    </div>
    )
  }
}

export class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tahundevelop : this.props.tahundevelop,
      tahunupdate : this.props.tahunupdate,
    }
    this.handleAlert = this.handleAlert.bind(this)
  }

  handleAlert(value,a){
    a.preventDefault()
    alert(value)
  }

  render() {
    var tahundevelop = this.state.tahundevelop
    var tahunupdate = this.state.tahunupdate
    return (
      <div>
        <h3>Footer</h3>
        <p><a href="/" alt="link" onClick={(a)=>this.handleAlert("selamat pagi",a)}>copyright</a> {tahundevelop} - {tahunupdate}</p>
      </div>
    )
  }
}
