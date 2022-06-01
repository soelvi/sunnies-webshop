export default {
	title: 'Products',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Product title',
			name: 'productTitle',
			type: 'string'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
					source: 'productTitle',
					maxLength: 200,
			},
		},
		{
			title: 'Product image',
			name: 'productImage',
			type: 'image',
		},
		{
			title: 'Product style',
			name: 'productStyle',
			type: 'array',
         	of: [{
               type: 'reference',
               to: [{ type: 'productStyle'}]
            }],
		},
		{
			title: 'Product color',
			name: 'productColor',
			type: 'array',
         	of: [{
               type: 'reference',
               to: [{ type: 'productColor'}]
            }],
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			title: 'Item on sale',
			name: 'sale',
			type: 'boolean',
			description: 'Swipe right if this item is on sale',
		},
		{
			title: 'Shipping',
			name: 'shipping',
			type: 'object',
			fields: [
				{
					title: 'Free shipping',
					name: 'freeShipping',
					type: 'boolean',
					description: 'Swipe left if there is extra shipping costs on this product',
					validation: Rule => Rule.required().error('Need to define shipping costs')
				},
				{
					title: 'Shipping cost',
					name: 'shippingCost',
					type: 'number',
					hidden: ({ parent, boolean }) => !boolean && parent?.freeShipping,
				}
			]
		},
		{
			title: 'Warranty',
			name: 'warranty',
			type: 'array',
         	of: [{
               type: 'reference',
               to: [{ type: 'warranty'}]
            }],
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		}
	]
}