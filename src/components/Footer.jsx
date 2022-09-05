import React from 'react'

const Footer = () => {
    const data=['Reactjs','TailwindCSS','React Router','Axios','Moment',]
  return (
    <div className='footer'>
        <div className="bg-slate-900 p-2 text-center">
            
            <h2 className='text-white '>This Assesment is provided by ImpactGuru</h2>
            <h2 className='text-white '>I have used a random static date 2019-09-06. Because  API doesn't have enough data to display on todays date</h2>
            <h2 className='text-white '>Used Technologies</h2>
            {data.map((item)=>(
                <span key={item} className='text-white  ml-2'> {item}</span>
            ))}
        </div>
    </div>
  )
}

export default Footer