import DashboardLayout from "../layouts/dashboard/dashboardLayout.vue";

const ProductRouter = [
    {
        path: "/product",
        name:"product",
        component:DashboardLayout,
        children: [
            {
                path:'',
                name:'',
                component: () => import('@/view/Product/products.vue')
            }
        ]
    }
]

export default ProductRouter;