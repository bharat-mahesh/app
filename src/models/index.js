// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Milk, categories, faqsData, user, cart, payDetails, orderData } = initSchema(schema);

export {
  Milk,
  categories,
  faqsData,
  user,
  cart,
  payDetails,
  orderData
};