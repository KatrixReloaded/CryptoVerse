import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                <Switch> /* Allows app to have multiple routes */
                  <Route exact path = "/">
                    <Homepage />
                  </Route>
                  <Route exact path = "/exchanges">
                    <Exchanges />
                  </Route>
                  <Route exact path = "/cryptocurrencies">
                    <Cryptocurrencies />
                  </Route>
                  <Route exact path = "/crypto/:coinId"> /* : means that the path is dynamic */
                    <CryptoDetails />
                  </Route>
                  <Route exact path = "/news"> /* : means that the path is dynamic */
                    <News />
                  </Route>
                </Switch>
              </div>
            </Layout>
        </div>
        <div className='footer'>

        </div>
    </div>
  )
}

export default App
