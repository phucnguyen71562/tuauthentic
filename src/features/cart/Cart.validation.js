import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Họ và tên chỉ được chứa ký tự chữ cái.')
    .min(6, 'Họ và tên tối thiểu 6 ký tự.')
    .max(255, 'Họ và tên tối đa 255 ký tự.')
    .required('Vui lòng nhập họ và tên.'),
  phone: yup.string().required('Vui lòng nhập số điện thoại'),
  receive_type: yup
    .mixed()
    .oneOf(['ship', 'store'])
    .required('Vui lòng chọn cách thức giao hàng.'),
  address: yup.string().when('receive_type', {
    is: 'ship',
    then: yup.string().required('Vui lòng nhập địa chỉ.'),
    otherwise: yup.string().notRequired(),
  }),
  other: yup.string(),
});

export default validationSchema;
