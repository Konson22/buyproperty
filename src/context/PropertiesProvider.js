import React, { useState, createContext, useContext, useEffect } from 'react'
// import axiosInstance from '../helpers/axiosInstance'
const axios = 'axios'


const PropertiesContextApi = createContext()

export const usePropertiesContext = e => useContext(PropertiesContextApi)

export default function PropertiesProvder({children}) {

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('');
  const [properties, setProperties] = useState([])

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()

    const fetchProperties = async () => {
      setLoading(true)
      try {
        const response = await axios('http://localhost:3001/properties', {
          signal:controller.signal
        }).then(res => res)
        console.log(response.data)
        isMounted && setProperties(response.data)
      } catch (error) {
        setErrors(error?.response?.data)
      }finally{
        setLoading(false)
      }
    }
    
    fetchProperties()

    return () => {
      isMounted = false
      controller.abort()
    }

  }, [])

  
  return (
    <PropertiesContextApi.Provider value={{loading, errors, properties}}>
      {children}
    </PropertiesContextApi.Provider>
  )
}



