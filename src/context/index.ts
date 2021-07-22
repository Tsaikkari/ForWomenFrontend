import React from 'react'
import { Service } from '../redux/types'

// TODO: add more props

interface IContextProps {
    service: Service
  }
  
  const ServiceContext = React.createContext({} as IContextProps)  
  
  export default ServiceContext