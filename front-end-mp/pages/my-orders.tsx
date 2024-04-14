import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import { OrderService } from "@/service/order.service";
import Heading from "@/ui/Heding";
import Layout from "@/ui/Layout/Layout";
import Meta from "@/ui/Meta";
import { convertPrice } from "@/utils/convertPrice";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";

const MyOrdersPage: NextPageAuth = () => {

    const { data: orders } = useQuery({
        queryKey: ['my orders'],
        queryFn:  async () => {
                    return await OrderService.getAll()
                },
        select:(data)=>data
    })

    return (
        <Meta title="Мои заказы">
            <Layout>
            <Heading> Мои заказы </Heading>

            <section>
                {orders?.length ? (
                    orders.map(order => (
                    <div id="orders" key={order.id} className='py-10 my-7 rounded-lg bg-white shadow flex gap-10  '>
                       
                            <span >#{order.id}</span>
                            <span>#{order.status}</span>
                            <span>#{new Date(order.createdAt).toLocaleDateString('ru-RU')}</span>
                            <span>#{convertPrice(order.total)}</span>

                        
                        
                    </div>
                ))) : (
                <div> Нет заказов</div>
                )}
            </section>

            </Layout>
        </Meta>
    )
}

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage