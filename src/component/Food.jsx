import React, { useState } from 'react'
import {data} from '../Data/Data.js'

function Food() {
    // console.log(data);
    const [foods, setFoods] = useState(data);

    // Filter Types Burger/Pizza/etc
    const filterType = (category) => {
        if(category === null) return setFoods(data);
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <FoodFilters setFilter={filterType} />
            <PriceFilters filterPrice={filterPrice} />
        </div>
        <FoodCardsContainer food={foods} />
    </div>
  )
}
export default Food

function FoodCardsContainer({food}){
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {food.map((item, index) => <FoodItem {...item} key={index} /> )}
        </div>
    )
}

function FoodItem(item){
    return (
        <div className='border shadow-2xl rounded-lg hover:scale-110 duration-300'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between mx-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                </p>
            </div>
        </div>
    )
}

function FoodFilters({ setFilter }){
    return (
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setFilter(null)} className='mr-2 py-1 px-2 transition duration-300 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={() => setFilter('burger')} className='mr-2 py-1 px-2 transition duration-300 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                <button onClick={() => setFilter('pizza')} className='mr-2 py-1 px-2 transition duration-300 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={() => setFilter('salad')} className='mr-2 py-1 px-2 transition duration-300 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                <button onClick={() => setFilter('chicken')} className='mr-2 py-1 px-2 transition duration-300 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
            </div>
        </div>
    )
}

function PriceFilters({ filterPrice }){
    return (
        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={() => filterPrice('$')} className='mr-2 py-1 px-2 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$</button>
                <button onClick={() => filterPrice('$$')} className='mr-2 py-1 px-2 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$</button>
                <button onClick={() => filterPrice('$$$')} className='mr-2 py-1 px-2 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$</button>
                <button onClick={() => filterPrice('$$$$')} className='mr-2 py-1 px-2 border-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-300'>$$$$</button>
            </div>
        </div>
    )
}