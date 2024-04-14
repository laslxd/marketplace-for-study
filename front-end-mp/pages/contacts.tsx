import Heading from "@/ui/Heding";
import Layout from "@/ui/Layout/Layout";
import Meta from "@/ui/Meta";
import { NextPage } from "next";

const contacts: NextPage = () => {
    return (
        <Meta title="Контакты">
            <Layout>
            <Heading> Контакты </Heading>
            <span id="about" className='mt-10 font-semibold'>Телефон: +7 (777) 777 77 77</span> <br></br>
            <span id="about" className='mt-10 font-semibold'>Электронная почта: PlanetMarket@gmail.com</span>
            <h1 id="about" className='text-3x1 font-semibold'>Фактический адрес:</h1>
            <span id="about" className='mt-10 '>127051, г. Москва, Цветной Бульвар, 30 стр. 1</span> <br></br>
            <span id="about" className='mt-10 '>Apollax Space, 2 этаж</span> <br />
            <span id="about" className='font-semibold'>График работы офиса:</span> <br />
            <span id="about" className='mt-10 '>Пн — Пт: 9:00–18:00</span>

            </Layout>
        </Meta>
    )
}

export default contacts