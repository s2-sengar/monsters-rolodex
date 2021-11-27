import React,{Component} from 'react'
import {CardList} from './components/card-list/CardList.components'
import {SearchBox} from './components/search-box/SearchBox.components'
import './App.css'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      monsters:[],
      searchField:''
    }
  }

  componentDidMount(){
    const fetchData=async ()=>{
      let data=await fetch('https://jsonplaceholder.typicode.com/users')
      data=await data.json()
      return data
    }
    fetchData()
    .then((data)=>this.setState({monsters:data}))
  }


  render(){
    const {monsters,searchField}=this.state;
    const filterdMonsters=monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return(
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <SearchBox placeholder="Search-Monster" handleChange={(e)=>{
                this.setState({searchField:e.target.value})
        }}/>
        <CardList key={filterdMonsters.id} monsters={filterdMonsters}/>
      </div>
    )
  }
}

export default App;
