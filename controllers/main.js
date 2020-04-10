const getTableData = (req, res, db) => {
  db.select('*').from('products')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

// const postTableData = (req, res, db) => {
//   const  { id, sku, title, description, availableSizes, price, isFreeShipping } = req.body
//   const added = new Date()
//   db('products').insert({ id, sku, title, description, availableSizes, price, isFreeShipping })
//     .returning('*')
//     .then(item => {
//       res.json(item)
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

// const putTableData = (req, res, db) => {
//   const { id, sku, title, description, availableSizes, price, isFreeShipping } = req.body
//   db('products').where({id}).update({ id, sku, title, description, availableSizes, price, isFreeShipping })
//     .returning('*')
//     .then(item => {
//       res.json(item)
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

// const deleteTableData = (req, res, db) => {
//   const { id } = req.body
//   db('products').where({id}).del()
//     .then(() => {
//       res.json({delete: 'true'})
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

module.exports = {
  getTableData,
  // postTableData,
  // putTableData,
  // deleteTableData
}
