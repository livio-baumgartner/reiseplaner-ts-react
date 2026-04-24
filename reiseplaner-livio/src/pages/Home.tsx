import { useState } from 'react'
import '../styles/App.css'
import { InputForm } from '../components/InputForm'
import type { TravelFormData } from '../models/travel';

function Home() {

  function handleTravelSubmit(data: TravelFormData) {
    console.log(data);
  }

  return (
    <>
     <div className="container">
  <h1>Reiseplaner</h1>

  <div className="card">
    <InputForm onSubmitTravel={handleTravelSubmit} />
  </div>
</div>
    </>
  )
}

export default Home
