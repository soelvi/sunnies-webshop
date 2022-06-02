export default {
	title: 'Products',
	name: 'product',
	type: 'document',
	fields: [
		{
			title: 'Product title',
			name: 'productTitle',
			type: 'string',
			validation: Rule => [ 
				Rule.required().min(5).error('The title needs atleast 5 characters'),
				Rule.max(15).error('Titles with more than 15 characters are too long')
         ]
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
			validation: Rule => Rule.required().error('Product must have an image'),
		},
		{
			title: 'Product style',
			name: 'productStyle',
			type: 'array',
         	of: [{
               type: 'reference',
               to: [{ type: 'productStyle'}]
            }],
			validation: Rule => Rule.required().error('Must fill inn product style')
		},
		{
			title: 'Product color',
			name: 'productColor',
			type: 'array',
         	of: [{
               type: 'reference',
               to: [{ type: 'productColor'}]
            }],
			validation: Rule => Rule.required().error('Must fill inn product color')
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
			validation: Rule => Rule.required().error('Must fill inn price')
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
			validation: Rule => Rule.required().error('Must fill inn warranty')
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: Rule => [ 
				Rule.required().min(5).error('The description needs atleast 5 characters long'),
         ]
			
		}
	]
}