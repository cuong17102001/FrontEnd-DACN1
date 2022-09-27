import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'

export const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem'/>
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in Relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Live in </b>
                </span>
                <span>VietNam</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Vku</span>
            </div>

            <button className='button logout-button'>
                Logout
            </button>
        </div>
    )
}
