
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

      const existDescription = products.find(product => product.descricao.tolocalelowercase()=== descricao.tolocalelowercase())

      if (existDescription) {
         return response.status(400).json({
            error: 'produto já cadastrado' 
         })
      }


   const product = {
      id,
      descriçao,
      valor,
      qtde
   }

   products.push(product)
      
   
   return response.json({data: product })
   },

    async getlistofcart(request, response) {
      return response.json({data: products})
    },

    async createusercart(request, response) {

     const {item} = request.body


     for (const product of item) {
      const productexists = products.find(prd => prd.id === product.id)
      if(productexists) {
         return response.status(400).json({
            error:'produto não encontrado'
         })
      }

      if(product.qtde > productexists.qtde) {
         return response.status(400).json({
            error:'quantidade não disponivel'
         })
      }

const useritens = {
   productid: productexists.id,
   descricao: productexistsdsecricao,
   qtde: product.qtde,
   valor: product.qtde = productexists.valor
}

usercart.push(useritens)

const index = products.findIndex(idx => idx.is === product.id)
produts[index].qtde = products[index].qtde - product.qtde

return response.json({
   order: usercart,
   stock: products
})

      console.log(product)
     }

console.log(products)

       return response.json({data: true})
    }
     
}
