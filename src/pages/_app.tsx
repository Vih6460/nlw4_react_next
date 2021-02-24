import '../styles/global.css'

import { challengesContext } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  return (
    <challengesContext.Provider>
      <Component {...pageProps} />
    </challengesContext.Provider>
  )
}

export default MyApp
