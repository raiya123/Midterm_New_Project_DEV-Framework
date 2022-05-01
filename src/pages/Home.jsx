import { Button, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import Service from '../services/Service'
import { Carousel } from 'antd';

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#171b24',
};

export default function Home() {
  const [Motorcycles, setMotorcycles] = useState([])
  useEffect(() => {
    let motorCycles = Service.getMotorcycles()
    setMotorcycles(motorCycles)
    console.log(Motorcycles)
  }, [])
  
  return (
    <div>
      <Carousel autoplay>
        {Motorcycles.map((motorcycle, index) => <div>
          <h3 style={contentStyle}>
            <img style={{width:"400px"}} src={motorcycle.image} alt="" />
          </h3>
        </div>)}
      </Carousel>
      <img src="https://th.bing.com/th/id/OIF.TbMX7qN1SsX7w8JL64P5QQ?w=315&h=153&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" height="400px" width="100%"/>
    </div>
  )
}
