import { createContext } from 'react'

export const AboutContext = createContext();

function AboutContextProvider({ children }) {
  const about = {
    name: 'Ibrahim Abdul-Latif',
    bio: 'passion with Belief',
    hobbies: ['dancing', 'music', "Movies"],
  }

  return (
    <AboutContext.Provider value={{ about }}>{children}</AboutContext.Provider>
  )
}

export default AboutContextProvider
