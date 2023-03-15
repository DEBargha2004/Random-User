import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Card from './components/card'
import Loading from './components/Loading'

function App() {
  const url = 'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2022'
  const [active, setActive] = useState(0)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      let response = await fetch(url)
      response = await response.json()
      setData(response.results)
      setLoading(false)
    }
    fetchdata()
  }, [])
  return (
    <div className='h-full'>
      {
        loading ?
          <Loading /> :
          <div className='flex justify-center items-center flex-col'>
            <Header index={active} results={data} />
            <div className='w-[90%] grid grid-cols-3 gap-4'>
              {data.map((item, index) => (
                <Card
                  data={item}
                  id={index}
                  key={index}
                  setActive={setActive}
                  active={active === index}
                />
              ))}
            </div>
          </div>
      }
    </div>
  )
}

export default App;