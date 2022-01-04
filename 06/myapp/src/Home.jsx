import React from 'react'
import { Link } from 'react-router-dom'
import Head from './Head';

const Home = () => {
  return (
    <div>
      <Head title="Página Home" description="Descrição da home" />
      <h1>Home</h1>
      <p>Página Home</p>
      <Link to="produto/notebook">Notebook</Link> {" "}
      <Link to="produto/smartphone">smartphone</Link>
    </div>
  )
}

export default Home
