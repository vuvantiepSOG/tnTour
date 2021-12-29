import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";
import MiniCart from "./components/MiniCart.vue";
import Shop from "./pages/Shop.vue";
import PostList from "./components/PostList.vue";


export default [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        props: true
    },
    {
        path: '/cart',
        component: MiniCart,
        name: 'minicart',
    },
    {
        path: '/tour',
        component: Shop,
        name: 'Tour',
    },
    {
        path: '/postlist',
        component: PostList,
        name: 'PostList',
    }

]