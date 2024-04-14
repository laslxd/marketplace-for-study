import { ProductService } from '@/service/product/product.service'
import { EnumProductSort } from '@/service/product/product.types'
import { ICategory } from '@/types/category.interface'
import { IProduct, TypePaginationProducts } from '@/types/product.interface'
import Heading from '@/ui/Heding'
import Layout from '@/ui/Layout/Layout'
import Button from '@/ui/button/Button'
import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { log } from 'console'
import Link from 'next/link'
import { Input } from 'postcss'
import React, { FC, useEffect, useState } from 'react'


const admin: FC = () => {

    const [data, setData] = useState()
    const [dataCategory, setDataCategory] = useState<ICategory[]>()
    const [deleteProduct, setDeleteProduct] = useState<number>()


    useEffect(() => {
        const api = 'http://localhost:4200/api/products'
        axios.get(api).then((resp) => {
            const allData = resp.data 
            setData(allData)
        })
    }, [setData]) 

    
    useEffect(() => {
        const api = 'http://localhost:4200/api/categories'
        axios.get(api).then((resp) => {
            const allData = resp.data 
            setDataCategory(allData)
        })
    }, [setDataCategory]) 


    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState(1)
    const [file, setFile] = useState([''])

    const sendData = async  (e)=>{
        e.preventDefault()
        const api = 'http://localhost:4200/api/products'
        const data = {
            name,
            description,
            price,
            category: +category,
            images: file
            
        }
        const id =  axios.post(api ,data)
        axios.put(api+`/${id}` , data)

    }


  return (
    
    <Layout>
    <div>
        <div className="conatiner mx-auto">
            <div className="py-2 mt-20  px-4 text-white mb-10 bg-red  w-fit mx-auto">
                <Link  href={'/'}>Обратно</Link>
            </div>
       
            <table className='mx-auto text-center'>
                <thead className=''>
                    <tr>
                        <td>Номер</td>
                        <td>Категория</td>
                        <td>Название</td>
                        <td>Описание</td>
                        <td>Цена</td>
                    </tr>
                </thead>
                <tbody>
            {
                data && data.products.map((item:IProduct) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.category?.name}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => ProductService.delete(item.id)}>X</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>
        <form className='w-1/4 mx-auto border-2 p-5 flex flex-col  rounded-3xl'>
            <label htmlFor="">Название</label>
            <input type='text' onChange={e=>{
                setName(e.target.value)
            }} className='outline-0 text-2xl py-2 px-4'/>
            <label htmlFor="">Описание</label>
            <textarea onChange={e=>{
                setDescription(e.target.value)
            }} className='outline-0 text-2xl py-2 px-4'/>

            <label htmlFor="">Категория</label>
            <select className='outline-0 text-2xl py-2 px-4'>
                {

                    dataCategory && dataCategory.map((item:ICategory,idx) => (
                        <option value={item.id}>{item.name}</option>
                    ))
                }
            </select>

            <label htmlFor="">Цена</label>
            <input type='number' onChange={e=>{
                setPrice(+e.target.value)
            }} className='outline-0 text-2xl py-2 px-4'/>           
            <label htmlFor="">Ссылка на изображение</label>
                
            <input type="text" onChange={e=>{
                
                 setFile([e.target.value])
                  console.log(file)
            }}/>
            <Button variant='orange' onClick={sendData}>Создать</Button>
        </form>
    </div>
    </Layout>
  )
}

export default admin