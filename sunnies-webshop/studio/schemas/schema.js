
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import color from './documents/productColor.js'
import product from './documents/product.js'
import style from './documents/productStyle.js'
import warranty from './documents/warranty.js'




export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    product,
    style,
    color,
    warranty
  ]),
})
