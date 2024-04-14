import Heading from "@/ui/Heding";
import Layout from "@/ui/Layout/Layout";
import Meta from "@/ui/Meta";
import { NextPage } from "next";

const ThanksPage: NextPage = () => {
    return (
        <Meta title="Спасибо!!!">
            <Layout>
            <Heading> Спасибо!!! </Heading>
            </Layout>
        </Meta>
    )
}

export default ThanksPage