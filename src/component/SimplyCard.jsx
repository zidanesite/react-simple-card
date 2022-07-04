import React, { Component } from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'

export default class SimplyCard extends Component {
  render() {
    return (
      <div className='card'>
          <Image src={require("./profile.jpeg")}/>
          <Title  text="Zinedine-Zidane"/>
          <Description text="Graphic Designer | Front-End Developer | Software Engineer"/>
      </div>
    )
  }
}

