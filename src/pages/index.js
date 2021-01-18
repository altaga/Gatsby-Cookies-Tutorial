import * as React from "react"
import App from "./components/app.js"
import { CookiesProvider } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

class IndexPage extends React.Component {
  render(){
    return (
      <CookiesProvider>
      <App />
      </CookiesProvider>
    )
  }
}

export default IndexPage
