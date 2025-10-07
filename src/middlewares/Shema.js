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

const ProductSchema = yup.object({
    title: yup
        .string()
        .required('Product name is required'),
    description: yup
        .string()
        .required('Description is required'),
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