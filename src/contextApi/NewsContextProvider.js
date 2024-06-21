import React,{useState} from 'react'
import NewsContext from './NewsConext.js'

function NewsContextProvider({children}) {
  
    const [categories , setCategories]=useState('general')
    const [selectedNews , setSelectedNews]= useState(null)

  return (
    <NewsContext.Provider value={{categories , setCategories, selectedNews , setSelectedNews}}>
     {children}
    </NewsContext.Provider>
  )
}

export default NewsContextProvider

