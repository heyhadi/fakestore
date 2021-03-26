// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/components/css/card-style.css'
import Detail from '../src/components/Detail'
import Home from '../src/views/Home'
import About from '../src/components/About'
import FavoritePage from '../src/views/Favorite'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/products/:id">
          <Detail/>
        </Route>
        <Route exact path="/aboutus">
          <About/>
        </Route>
        <Route exact path="/favorite">
          <FavoritePage/>
        </Route>


      </Switch>

    </Router>
    
  )
}













// class App extends React.Component {

//   constructor(){
//     super()

//     this.state = {
//       products: []
//     }
//   }

//   componentDidMount() {
//     fetch('https://fakestoreapi.com/products', {
//       method: 'GET', 
//     })
//     .then(res => res.json())
//     .then(data => {
//       const list = []
//       data.forEach(element => {
//         list.push({
//           id: element.id,
//           title: element.title,
//           price: element.price,
//           category: element.category,
//           image: element.image


//         })
//       });
//       console.log(list);
//       this.setState({
//         products:list
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   render() {
//     const {products} = this.state
//     return ( 
//     <div>
//       <Navbar/>
//       <br/>
      // <h1 className="text-center mb-3">Product list</h1>
      // <div className="container-fluid d-flex mt-3 justify-content-center ">
      //   <div className="row row-cols-4">
      //   {
      //   products.map(product => {
      //     return <Product key={product.id} product={product}/>
      //   })
      // }
      //   </div>
      // </div>
//     </div>
//     )
//   }
// }



// export default App;
