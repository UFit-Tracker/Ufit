import React from 'react'
import './index.css'
import ufit from '@/Pictures/ufit.png'


const tempProfile = {
    name: "xiaoming",
    email: "rl@gmail.com",
    gender: "female",
    age: 22,
    weight: 12,
    heightFeet: 5,
    heightInch: 12,
    BMI: 23,
    avgDiet: 1700,
    avgSport: 0.5,
    goalDiet: 1500,
    goalSport: 1,




}

const MyProfileFormIndex = () => {

    return (
        <>
            <div className='profile-box'>
                <form className='profile-form'>

                    <ul className='basicInfo'>
                        <li className='profile-img'>
                            <img src={ufit}></img>
                            <li className='name'>{tempProfile.name}</li>

                        </li >
                        <li className='name-ufit'>
                            <h3>Basic Information</h3>

                            <li><span>Email : </span>{tempProfile.email}</li>
                            <li><span>Age : </span>{tempProfile.age}</li>
                            <li><span>Weight : </span>{tempProfile.weight} Kg</li>
                            <li><span>Height : </span>{tempProfile.heightFeet} ' {tempProfile.heightInch} "</li>
                            <li><span>BMI : </span>{tempProfile.BMI}</li>
                            <li><span>Average Diet : </span>{tempProfile.avgDiet} Kcal/Day</li>
                            <li><span>Average Sports : </span>{tempProfile.avgSport} Hours/Day</li>

                        </li>
                    </ul>
                    <ul className='name-ufit'>
                        <h3>Goals</h3>
                        <li><span>Goals for Diet : </span>{tempProfile.goalDiet} Kcal/Day</li>
                        <li><span>Average Diet : </span>{tempProfile.goalSport} Hours/Day</li>

                    </ul>


                </form>
            </div>
        </>
    )
}

export default MyProfileFormIndex