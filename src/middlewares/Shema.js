const yup = require('yup');

const UserSchema = yup.object({
    name: yup
        .string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format'),
    password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
});
const CategoryShema=yup.object({
    name:yup.string().required('Category name is required ').min(3, 'name  must be at least 3 characters')
})

const ProductSchema = yup.object({
    title: yup
        .string()
        .required('Product name is required').min(3, 'title must be at least 3 characters'),
    description: yup
        .string()
        .required('Description is required').min(3, 'description must be at least 3 characters'),
    price: yup
        .number()
        .positive('Price must be positive')
        .required('Price is required'),
    stock: yup
        .number()
        .positive('Stock must be positive')
        .required('Stock is required'),
    imageUrl: yup
        .string(),
    category: yup
        .string()
        .required('Category is required'),
});
const shema={UserSchema,CategoryShema,ProductSchema};
module.exports=shema;