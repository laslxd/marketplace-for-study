import { useProfile } from "@/hooks/useProfile";
import { NextPageAuth } from "@/providers/auth-provider/auth-page.types";
import Layout from "@/ui/Layout/Layout";
import Meta from "@/ui/Meta";
import Catalog from "@/ui/catalog/Catalog";

const FavoritesPage: NextPageAuth = () => {
    const {profile} = useProfile()

    return (
        <Meta title='Избранное'>
            <Layout>
                <Catalog products={profile?.favorites || []} title='Избранное'/>
            </Layout>
        </Meta>
    )
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage