import React from 'react'

const Cards = ({item}) => {
                
  return (
    <>
        <div className='mt-4 my-3 p-2'>
            <div className="card bg-base-100 w-80 shadow-lg hover:scale-105 duration-200">
                <figure>
                    <img
                    src={item.image}
                    alt={item.name}
                    
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {item.name}
                    <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                    <div className="badge badge-outline">${item.price}</div>
                    <div className="cursor-pointer px-2 py-1 border-[1px] rounded-full hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards

