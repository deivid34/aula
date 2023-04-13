
const products = [
   {
      id: 1,
      descriçao:'coca cola 2lts',
      valor:10.00,
      qtde:10
   },
   {
      id: 2,
      descriçao:'cerveja',
      valor:5.00,
      qtde:50
   },
   {
      id: 3,
      descriçao:'agua',
      valor:2.00,
      qtde:5
   }
]

module.exports = {

    async createCart(request, response) {

      const {id, descriçao, valor, qtde} = request.body

const existproduct = products.find(product => product.id === id)

console.log(existproduct)
if (existproduct) {
   return response.status(400).json({
      error: 'produto já cadastrado' 
   })
}
   
      products.push({
         id,
         descriçao,
         valor,
         qtde
      })

      return response.json({data: products })
    }  
}
