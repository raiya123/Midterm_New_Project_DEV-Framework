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

// const fectchApi = async () => {
//   const res = await fetch("https://lyhuoy.github.io/jsonapi/api.json")
//   return res.json()
// }
export default function Home() {
  const [Motorcycles, setMotorcycles] = useState([])
  // const {data} = useQuery(['datas'], fectchApi)
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
      <img src="https://www.ncxhonda.com/storage/app/uploads/Posts/88adaf09f9f6479893261aeb056d95963ecfbe18/278541600_1381672682307092_2116113773485727039_n.jpg" alt="" width="100%" height="500px" />
    </div>
  )
}
