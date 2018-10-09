// https://monsterlessons.com/project/lessons/async-await-v-javascript
// Async await 


const fetchProducts = () => Promise.resolve({data: [1, 2, 3]});
const fetchAdditional = (product) => Promise.resolve({data:[2,3,4]})

const getProduct = async () => {

        const products = await fetchProducts()

        if (!products.data.length) {
            return products.data
        }
        return await fetchAdditional(products.data)





    // return fetchProducts().then(products => {
    //     if (products.data.length) {
    //         return fetchAdditional(products.data)
    //             .then(additionalData => {
    //                 return additionalData
    //             })
    //     } else {
    //         return products.data
    //     }
    // })



     
    // try{
    //     const products = await fetchProducts()
    //     console.log('products', products)
    // } catch (err) {
    //     console.log('err', err)
    // }






    // fetchProducts()
    //     .then(result => {
    //          console.log('result', result)
    //     })
    //     .catch(err => {
    //         console.log('err', err)
    //     })
}

getProduct().then(result => {
    console.log('result', result)
}); 

