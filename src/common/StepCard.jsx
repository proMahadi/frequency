import Image from 'next/image'
import React from 'react'

const StepCard = ({src,title,description, className_h3}) => {
  return (
    <div className='step-card'>
        <Image src={src} className='mx-auto' alt='steps'/>
        <h3 className={`card-title ${className_h3}`}>{title}</h3>
        <p className='common-paragraph'>{description}</p>
    </div>
  )
}

export default StepCard