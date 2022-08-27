// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Milk, Butter, ButterMilk, Paneer, Cheese, MilkPowder, categories, faqsData, user, cart, payDetails, orderData } = initSchema(schema);

export {
  Milk,
  Butter,
  ButterMilk,
  Paneer,
  Cheese,
  MilkPowder,
  categories,
  faqsData,
  user,
  cart,
  payDetails,
  orderData
};