import React, { useState } from 'react'
import foodRecipe from '../assets/foodRecipe.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import InputForm from '../components/InputForm'

import videoFile from "../assets/Flavourly.mp4"

export default function Home() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const addRecipe = () => {
        let token = localStorage.getItem("token")
        if (token)
            navigate("/addRecipe")
        else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <section className='home'>
                <div className='left'>
                    <h1>Flavourly</h1>
                    <h3>"Savor the magic of homemade"</h3>
                    <button onClick={addRecipe}>Share your recipe</button>
                </div>
                <div className='right'>
                    

                        {/* Video component */}
                        <video src={videoFile} autoPlay loop muted style={{ width: '100%', height: '100%' }} />

                </div>
            </section>
            <div className='bg'>
            
            </div> 
            {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
            <div id='recipe' className='container-fluid'>
                <RecipeItems />
            </div>
        </>
    )
}
