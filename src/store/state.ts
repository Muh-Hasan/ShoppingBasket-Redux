
// export interface ProductItem {
//     product: [{
//         id: String,
//         name: String,
//         // descrition : String,
//         price: Number,
//         src: String,
//         quantity: Number,
//         added?: Boolean,
//     }]
// }
export type Product = {
    id: String,
        name: String,
        price: Number,
        src: string,
        quantity: Number,
        added?: Boolean,
}
const product : Product[] = [{
    id: '0',
    name: "X_PLR SHOES",
    price: 120,
    quantity: 0,
    src:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/3bc559945bec4020b6feaba0000c6c1a_9366/X_PLR_Shoes_Black_FY9053_01_standard.jpg"
},
    {
        id: "1",
        name: "SUPERNOVA SHOES",
        price: 140,
        quantity: 0,
        src:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4a549ce0706d464a9692ab650129e6e9_9366/Supernova_Shoes_Green_FW0701_01_standard.jpg"
},
    {
        id: "2",
        name: "FLUIDFLOW SHOES",
        price: 160,
        quantity: 0,
        src:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/c6037c5ff2b64fbc8b51ab0b00bec14e_9366/Fluidflow_Shoes_Black_EG3665_EG3665_01_standard.jpg"
},
    {
        id: "3",
        name: "QUESTAR FLOW SHOES",
        price: 100,
        quantity: 0,
        src:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/ae89c62c7c1b4687adaaaba5013ea7ab_9366/Questar_Flow_Shoes_Black_FW5111_01_standard.jpg"
},
    {
        id: "4",
        name: "COUNTRY OG SHOES",
        price: 80,
        quantity: 0,
        src:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/5886afabf727403dae84ab97010ea6d4_9366/Country_OG_Shoes_White_FV1223_01_standard.jpg"
},
    {
        id: "5",
        name: "SUPERSTAR SHOES",
        price: 200,
        quantity: 0,
        src:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/45be7d9601694326843aaba50115f34a_9366/Superstar_Shoes_White_FW4406_01_standard.jpg"
},
    {
        id: "6",
        name: "GALAXY 5 SHOES",
        price: 160,
        quantity: 0,
        src:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/8e392059bc8d4eb382b4aba501496ce6_9366/Galaxy_5_Shoes_Red_FW5703_01_standard.jpg"
}]


const cart : Product[] = []


const InitialState = [
    product,
    cart
]
export { InitialState }