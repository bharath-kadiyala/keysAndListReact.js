import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNumber: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Bharath',
    role: 'Software Developer',
  },
  {
    uniqueNumber: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Selina',
    role: 'Software Developer',
  },
  {
    uniqueNumber: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Liz',
    role: 'Software Developer',
  },
  {
    uniqueNumber: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Edvard',
    role: 'Software Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNumber} />
      ))}
    </ul>
  </div>
)

export default App
