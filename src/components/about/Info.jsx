import React from 'react'

const Info = () => {
  return (
    <div className="about__info">
        <div className="about__box">
        <i class='bx bxs-award about__icon' ></i>
            <h3 className="about__title">Passion</h3>
            <span className="about__subtitle">
                Eager to learn and contribute
            </span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Creative Mindset</h3>
            <span className="about__subtitle">
                
            </span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">
                Online 24/7
            </span>
        </div>
    </div>
  )
}

export default Info