 import './App.css'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import WebPage from './WebPage'
import Fullstack from './Fullstack'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Career from './Career'
import All from './All'
import Dropdown from './Dropdown'
function App() { 
  return (
    <>
     <Dropdown/>
    <img src="https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png"></img>
    <Router>
     <div>
       <div className='container-fluid'>
        <Routes>
          <Route path="/course/:courseName" Component={WebPage}></Route>
       </Routes>
       </div>
          <nav className="containerbox">
            <Link to="/course"><button>ALL</button> </Link> 
            <Link to="/course/FullstackDevelopment"><button>FULLSTACK-DEVELOPMENT</button> </Link>  
            <Link to="/course/DataScience"><button> DATA-SCIENCE </button> </Link>
            <Link to="/course/CyberSecurity"><button> CYBER-SECURITY</button> </Link>
            <Link to="/course/Career"><button>CAREER</button></Link>
          </nav>
     </div>
        <div className='container-fluid-1'>
         <Routes>
            <Route path="/course" Component={All}/>
            <Route path="/course/FullstackDevelopment" Component={Fullstack}/>
            <Route path="/course/DataScience" Component={DataScience}/>
            <Route path="/course/CyberSecurity"Component={CyberSecurity}/>
            <Route path="/course/Career"Component={Career}/>
          </Routes>
         </div>
   
  </Router>
  
    </>
  )
}

export default App
