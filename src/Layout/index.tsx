import './index.scss'

import MovieList from '../MovieList';
import convincelyLogo from '../assets/convincely.svg'

function Layout() {
  return (
    <>
      <header className="headline">
        <div className="headline__icon">
          <img src={convincelyLogo} />
        </div>
        <div className="headline__applicant">
          <span className="headline__applicant-position">Code challenge</span>
          <span className="headline__applicant-name">Front end developer</span>
        </div>
      </header>
      <main>
        <MovieList/>
      </main>
    </>
  )
}

export default Layout
