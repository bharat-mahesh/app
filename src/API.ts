/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMilkInput = {
  id?: string | null,
  image: string,
  farmName: string,
  itemName: string,
  price: number,
  minNoOfItemPurchase: number,
  availableQuantity: number,
  rating?: number | null,
  _version?: number | null,
};

export type ModelMilkConditionInput = {
  image?: ModelStringInput | null,
  farmName?: ModelStringInput | null,
  itemName?: ModelStringInput | null,
  price?: ModelIntInput | null,
  minNoOfItemPurchase?: ModelIntInput | null,
  availableQuantity?: ModelIntInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelMilkConditionInput | null > | null,
  or?: Array< ModelMilkConditionInput | null > | null,
  not?: ModelMilkConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Milk = {
  __typename: "Milk",
  id: string,
  image: string,
  farmName: string,
  itemName: string,
  price: number,
  minNoOfItemPurchase: number,
  availableQuantity: number,
  rating?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateMilkInput = {
  id: string,
  image?: string | null,
  farmName?: string | null,
  itemName?: string | null,
  price?: number | null,
  minNoOfItemPurchase?: number | null,
  availableQuantity?: number | null,
  rating?: number | null,
  _version?: number | null,
};

export type DeleteMilkInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoriesInput = {
  id?: string | null,
  cardName: string,
  title: string,
  image: string,
  _version?: number | null,
};

export type ModelCategoriesConditionInput = {
  cardName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoriesConditionInput | null > | null,
  or?: Array< ModelCategoriesConditionInput | null > | null,
  not?: ModelCategoriesConditionInput | null,
};

export type categories = {
  __typename: "categories",
  id: string,
  cardName: string,
  title: string,
  image: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCategoriesInput = {
  id: string,
  cardName?: string | null,
  title?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteCategoriesInput = {
  id: string,
  _version?: number | null,
};

export type CreateFaqsDataInput = {
  sectionHeader: string,
  id?: string | null,
  _version?: number | null,
};

export type ModelFaqsDataConditionInput = {
  sectionHeader?: ModelStringInput | null,
  and?: Array< ModelFaqsDataConditionInput | null > | null,
  or?: Array< ModelFaqsDataConditionInput | null > | null,
  not?: ModelFaqsDataConditionInput | null,
};

export type faqsData = {
  __typename: "faqsData",
  sectionHeader: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateFaqsDataInput = {
  sectionHeader?: string | null,
  id: string,
  _version?: number | null,
};

export type DeleteFaqsDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  userName: string,
  email: string,
  authenticated: boolean,
  deliveryLocation: string,
  country: string,
  city: string,
  zipcode: boolean,
  totalNoOfItems: number,
  totalNoOfOrdersMade: number,
  id?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  authenticated?: ModelBooleanInput | null,
  deliveryLocation?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  zipcode?: ModelBooleanInput | null,
  totalNoOfItems?: ModelIntInput | null,
  totalNoOfOrdersMade?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type user = {
  __typename: "user",
  userName: string,
  email: string,
  authenticated: boolean,
  deliveryLocation: string,
  country: string,
  city: string,
  zipcode: boolean,
  totalNoOfItems: number,
  totalNoOfOrdersMade: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateUserInput = {
  userName?: string | null,
  email?: string | null,
  authenticated?: boolean | null,
  deliveryLocation?: string | null,
  country?: string | null,
  city?: string | null,
  zipcode?: boolean | null,
  totalNoOfItems?: number | null,
  totalNoOfOrdersMade?: number | null,
  id: string,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartInput = {
  id?: string | null,
  image: string,
  farmName: string,
  itemname: string,
  minNoOfItemPurchase: number,
  price: number,
  orderCount: number,
  totalPice: number,
  _version?: number | null,
};

export type ModelCartConditionInput = {
  image?: ModelStringInput | null,
  farmName?: ModelStringInput | null,
  itemname?: ModelStringInput | null,
  minNoOfItemPurchase?: ModelIntInput | null,
  price?: ModelIntInput | null,
  orderCount?: ModelIntInput | null,
  totalPice?: ModelIntInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
};

export type cart = {
  __typename: "cart",
  id: string,
  image: string,
  farmName: string,
  itemname: string,
  minNoOfItemPurchase: number,
  price: number,
  orderCount: number,
  totalPice: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCartInput = {
  id: string,
  image?: string | null,
  farmName?: string | null,
  itemname?: string | null,
  minNoOfItemPurchase?: number | null,
  price?: number | null,
  orderCount?: number | null,
  totalPice?: number | null,
  _version?: number | null,
};

export type DeleteCartInput = {
  id: string,
  _version?: number | null,
};

export type CreatePayDetailsInput = {
  mrp_total: number,
  prod_discount: number,
  tot_amount: number,
  id?: string | null,
  _version?: number | null,
};

export type ModelPayDetailsConditionInput = {
  mrp_total?: ModelFloatInput | null,
  prod_discount?: ModelFloatInput | null,
  tot_amount?: ModelFloatInput | null,
  and?: Array< ModelPayDetailsConditionInput | null > | null,
  or?: Array< ModelPayDetailsConditionInput | null > | null,
  not?: ModelPayDetailsConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type payDetails = {
  __typename: "payDetails",
  mrp_total: number,
  prod_discount: number,
  tot_amount: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePayDetailsInput = {
  mrp_total?: number | null,
  prod_discount?: number | null,
  tot_amount?: number | null,
  id: string,
  _version?: number | null,
};

export type DeletePayDetailsInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderDataInput = {
  order_number: number,
  order_status: number,
  tot_ordered_items: number,
  tot_amnt: number,
  farm_name: string,
  id?: string | null,
  _version?: number | null,
};

export type ModelOrderDataConditionInput = {
  order_number?: ModelIntInput | null,
  order_status?: ModelIntInput | null,
  tot_ordered_items?: ModelIntInput | null,
  tot_amnt?: ModelFloatInput | null,
  farm_name?: ModelStringInput | null,
  and?: Array< ModelOrderDataConditionInput | null > | null,
  or?: Array< ModelOrderDataConditionInput | null > | null,
  not?: ModelOrderDataConditionInput | null,
};

export type orderData = {
  __typename: "orderData",
  order_number: number,
  order_status: number,
  tot_ordered_items: number,
  tot_amnt: number,
  farm_name: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateOrderDataInput = {
  order_number?: number | null,
  order_status?: number | null,
  tot_ordered_items?: number | null,
  tot_amnt?: number | null,
  farm_name?: string | null,
  id: string,
  _version?: number | null,
};

export type DeleteOrderDataInput = {
  id: string,
  _version?: number | null,
};

export type ModelMilkFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  farmName?: ModelStringInput | null,
  itemName?: ModelStringInput | null,
  price?: ModelIntInput | null,
  minNoOfItemPurchase?: ModelIntInput | null,
  availableQuantity?: ModelIntInput | null,
  rating?: ModelIntInput | null,
  and?: Array< ModelMilkFilterInput | null > | null,
  or?: Array< ModelMilkFilterInput | null > | null,
  not?: ModelMilkFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMilkConnection = {
  __typename: "ModelMilkConnection",
  items:  Array<Milk | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoriesFilterInput = {
  id?: ModelIDInput | null,
  cardName?: ModelStringInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoriesFilterInput | null > | null,
  or?: Array< ModelCategoriesFilterInput | null > | null,
  not?: ModelCategoriesFilterInput | null,
};

export type ModelCategoriesConnection = {
  __typename: "ModelCategoriesConnection",
  items:  Array<categories | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFaqsDataFilterInput = {
  sectionHeader?: ModelStringInput | null,
  and?: Array< ModelFaqsDataFilterInput | null > | null,
  or?: Array< ModelFaqsDataFilterInput | null > | null,
  not?: ModelFaqsDataFilterInput | null,
};

export type ModelFaqsDataConnection = {
  __typename: "ModelFaqsDataConnection",
  items:  Array<faqsData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  userName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  authenticated?: ModelBooleanInput | null,
  deliveryLocation?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  zipcode?: ModelBooleanInput | null,
  totalNoOfItems?: ModelIntInput | null,
  totalNoOfOrdersMade?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<user | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  image?: ModelStringInput | null,
  farmName?: ModelStringInput | null,
  itemname?: ModelStringInput | null,
  minNoOfItemPurchase?: ModelIntInput | null,
  price?: ModelIntInput | null,
  orderCount?: ModelIntInput | null,
  totalPice?: ModelIntInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<cart | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPayDetailsFilterInput = {
  mrp_total?: ModelFloatInput | null,
  prod_discount?: ModelFloatInput | null,
  tot_amount?: ModelFloatInput | null,
  and?: Array< ModelPayDetailsFilterInput | null > | null,
  or?: Array< ModelPayDetailsFilterInput | null > | null,
  not?: ModelPayDetailsFilterInput | null,
};

export type ModelPayDetailsConnection = {
  __typename: "ModelPayDetailsConnection",
  items:  Array<payDetails | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrderDataFilterInput = {
  order_number?: ModelIntInput | null,
  order_status?: ModelIntInput | null,
  tot_ordered_items?: ModelIntInput | null,
  tot_amnt?: ModelFloatInput | null,
  farm_name?: ModelStringInput | null,
  and?: Array< ModelOrderDataFilterInput | null > | null,
  or?: Array< ModelOrderDataFilterInput | null > | null,
  not?: ModelOrderDataFilterInput | null,
};

export type ModelOrderDataConnection = {
  __typename: "ModelOrderDataConnection",
  items:  Array<orderData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateMilkMutationVariables = {
  input: CreateMilkInput,
  condition?: ModelMilkConditionInput | null,
};

export type CreateMilkMutation = {
  createMilk?:  {
    __typename: "Milk",
    id: string,
    image: string,
    farmName: string,
    itemName: string,
    price: number,
    minNoOfItemPurchase: number,
    availableQuantity: number,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateMilkMutationVariables = {
  input: UpdateMilkInput,
  condition?: ModelMilkConditionInput | null,
};

export type UpdateMilkMutation = {
  updateMilk?:  {
    __typename: "Milk",
    id: string,
    image: string,
    farmName: string,
    itemName: string,
    price: number,
    minNoOfItemPurchase: number,
    availableQuantity: number,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteMilkMutationVariables = {
  input: DeleteMilkInput,
  condition?: ModelMilkConditionInput | null,
};

export type DeleteMilkMutation = {
  deleteMilk?:  {
    __typename: "Milk",
    id: string,
    image: string,
    farmName: string,
    itemName: string,
    price: number,
    minNoOfItemPurchase: number,
    availableQuantity: number,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoriesMutationVariables = {
  input: CreateCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type CreateCategoriesMutation = {
  createCategories?:  {
    __typename: "categories",
    id: string,
    cardName: string,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoriesMutationVariables = {
  input: UpdateCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type UpdateCategoriesMutation = {
  updateCategories?:  {
    __typename: "categories",
    id: string,
    cardName: string,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoriesMutationVariables = {
  input: DeleteCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type DeleteCategoriesMutation = {
  deleteCategories?:  {
    __typename: "categories",
    id: string,
    cardName: string,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateFaqsDataMutationVariables = {
  input: CreateFaqsDataInput,
  condition?: ModelFaqsDataConditionInput | null,
};

export type CreateFaqsDataMutation = {
  createFaqsData?:  {
    __typename: "faqsData",
    sectionHeader: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateFaqsDataMutationVariables = {
  input: UpdateFaqsDataInput,
  condition?: ModelFaqsDataConditionInput | null,
};

export type UpdateFaqsDataMutation = {
  updateFaqsData?:  {
    __typename: "faqsData",
    sectionHeader: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteFaqsDataMutationVariables = {
  input: DeleteFaqsDataInput,
  condition?: ModelFaqsDataConditionInput | null,
};

export type DeleteFaqsDataMutation = {
  deleteFaqsData?:  {
    __typename: "faqsData",
    sectionHeader: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "user",
    userName: string,
    email: string,
    authenticated: boolean,
    deliveryLocation: string,
    country: string,
    city: string,
    zipcode: boolean,
    totalNoOfItems: number,
    totalNoOfOrdersMade: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "user",
    userName: string,
    email: string,
    authenticated: boolean,
    deliveryLocation: string,
    country: string,
    city: string,
    zipcode: boolean,
    totalNoOfItems: number,
    totalNoOfOrdersMade: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "user",
    userName: string,
    email: string,
    authenticated: boolean,
    deliveryLocation: string,
    country: string,
    city: string,
    zipcode: boolean,
    totalNoOfItems: number,
    totalNoOfOrdersMade: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "cart",
    id: string,
    image: string,
    farmName: string,
    itemname: string,
    minNoOfItemPurchase: number,
    price: number,
    orderCount: number,
    totalPice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "cart",
    id: string,
    image: string,
    farmName: string,
    itemname: string,
    minNoOfItemPurchase: number,
    price: number,
    orderCount: number,
    totalPice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "cart",
    id: string,
    image: string,
    farmName: string,
    itemname: string,
    minNoOfItemPurchase: number,
    price: number,
    orderCount: number,
    totalPice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePayDetailsMutationVariables = {
  input: CreatePayDetailsInput,
  condition?: ModelPayDetailsConditionInput | null,
};

export type CreatePayDetailsMutation = {
  createPayDetails?:  {
    __typename: "payDetails",
    mrp_total: number,
    prod_discount: number,
    tot_amount: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePayDetailsMutationVariables = {
  input: UpdatePayDetailsInput,
  condition?: ModelPayDetailsConditionInput | null,
};

export type UpdatePayDetailsMutation = {
  updatePayDetails?:  {
    __typename: "payDetails",
    mrp_total: number,
    prod_discount: number,
    tot_amount: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePayDetailsMutationVariables = {
  input: DeletePayDetailsInput,
  condition?: ModelPayDetailsConditionInput | null,
};

export type DeletePayDetailsMutation = {
  deletePayDetails?:  {
    __typename: "payDetails",
    mrp_total: number,
    prod_discount: number,
    tot_amount: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrderDataMutationVariables = {
  input: CreateOrderDataInput,
  condition?: ModelOrderDataConditionInput | null,
};

export type CreateOrderDataMutation = {
  createOrderData?:  {
    __typename: "orderData",
    order_number: number,
    order_status: number,
    tot_ordered_items: number,
    tot_amnt: number,
    farm_name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrderDataMutationVariables = {
  input: UpdateOrderDataInput,
  condition?: ModelOrderDataConditionInput | null,
};

export type UpdateOrderDataMutation = {
  updateOrderData?:  {
    __typename: "orderData",
    order_number: number,
    order_status: number,
    tot_ordered_items: number,
    tot_amnt: number,
    farm_name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrderDataMutationVariables = {
  input: DeleteOrderDataInput,
  condition?: ModelOrderDataConditionInput | null,
};

export type DeleteOrderDataMutation = {
  deleteOrderData?:  {
    __typename: "orderData",
    order_number: number,
    order_status: number,
    tot_ordered_items: number,
    tot_amnt: number,
    farm_name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetMilkQueryVariables = {
  id: string,
};

export type GetMilkQuery = {
  getMilk?:  {
    __typename: "Milk",
    id: string,
    image: string,
    farmName: string,
    itemName: string,
    price: number,
    minNoOfItemPurchase: number,
    availableQuantity: number,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListMilksQueryVariables = {
  filter?: ModelMilkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMilksQuery = {
  listMilks?:  {
    __typename: "ModelMilkConnection",
    items:  Array< {
      __typename: "Milk",
      id: string,
      image: string,
      farmName: string,
      itemName: string,
      price: number,
      minNoOfItemPurchase: number,
      availableQuantity: number,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMilksQueryVariables = {
  filter?: ModelMilkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMilksQuery = {
  syncMilks?:  {
    __typename: "ModelMilkConnection",
    items:  Array< {
      __typename: "Milk",
      id: string,
      image: string,
      farmName: string,
      itemName: string,
      price: number,
      minNoOfItemPurchase: number,
      availableQuantity: number,
      rating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoriesQueryVariables = {
  id: string,
};

export type GetCategoriesQuery = {
  getCategories?:  {
    __typename: "categories",
    id: string,
    cardName: string,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoriesConnection",
    items:  Array< {
      __typename: "categories",
      id: string,
      cardName: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoriesConnection",
    items:  Array< {
      __typename: "categories",
      id: string,
      cardName: string,
      title: string,
      image: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFaqsDataQueryVariables = {
  id: string,
};

export type GetFaqsDataQuery = {
  getFaqsData?:  {
    __typename: "faqsData",
    sectionHeader: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListFaqsDataQueryVariables = {
  filter?: ModelFaqsDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFaqsDataQuery = {
  listFaqsData?:  {
    __typename: "ModelFaqsDataConnection",
    items:  Array< {
      __typename: "faqsData",
      sectionHeader: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFaqsDataQueryVariables = {
  filter?: ModelFaqsDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFaqsDataQuery = {
  syncFaqsData?:  {
    __typename: "ModelFaqsDataConnection",
    items:  Array< {
      __typename: "faqsData",
      sectionHeader: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "user",
    userName: string,
    email: string,
    authenticated: boolean,
    deliveryLocation: string,
    country: string,
    city: string,
    zipcode: boolean,
    totalNoOfItems: number,
    totalNoOfOrdersMade: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "user",
      userName: string,
      email: string,
      authenticated: boolean,
      deliveryLocation: string,
      country: string,
      city: string,
      zipcode: boolean,
      totalNoOfItems: number,
      totalNoOfOrdersMade: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "user",
      userName: string,
      email: string,
      authenticated: boolean,
      deliveryLocation: string,
      country: string,
      city: string,
      zipcode: boolean,
      totalNoOfItems: number,
      totalNoOfOrdersMade: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "cart",
    id: string,
    image: string,
    farmName: string,
    itemname: string,
    minNoOfItemPurchase: number,
    price: number,
    orderCount: number,
    totalPice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "cart",
      id: string,
      image: string,
      farmName: string,
      itemname: string,
      minNoOfItemPurchase: number,
      price: number,
      orderCount: number,
      totalPice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartsQuery = {
  syncCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "cart",
      id: string,
      image: string,
      farmName: string,
      itemname: string,
      minNoOfItemPurchase: number,
      price: number,
      orderCount: number,
      totalPice: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPayDetailsQueryVariables = {
  id: string,
};

export type GetPayDetailsQuery = {
  getPayDetails?:  {
    __typename: "payDetails",
    mrp_total: number,
    prod_discount: number,
    tot_amount: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPayDetailsQueryVariables = {
  filter?: ModelPayDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPayDetailsQuery = {
  listPayDetails?:  {
    __typename: "ModelPayDetailsConnection",
    items:  Array< {
      __typename: "payDetails",
      mrp_total: number,
      prod_discount: number,
      tot_amount: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPayDetailsQueryVariables = {
  filter?: ModelPayDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPayDetailsQuery = {
  syncPayDetails?:  {
    __typename: "ModelPayDetailsConnection",
    items:  Array< {
      __typename: "payDetails",
      mrp_total: number,
      prod_discount: number,
      tot_amount: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderDataQueryVariables = {
  id: string,
};

export type GetOrderDataQuery = {
  getOrderData?:  {
    __typename: "orderData",
    order_number: number,
    order_status: number,
    tot_ordered_items: number,
    tot_amnt: number,
    farm_name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrderDataQueryVariables = {
  filter?: ModelOrderDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderDataQuery = {
  listOrderData?:  {
    __typename: "ModelOrderDataConnection",
    items:  Array< {
      __typename: "orderData",
      order_number: number,
      order_status: number,
      tot_ordered_items: number,
      tot_amnt: number,
      farm_name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrderDataQueryVariables = {
  filter?: ModelOrderDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrderDataQuery = {
  syncOrderData?:  {
    __typename: "ModelOrderDataConnection",
    items:  Array< {
      __typename: "orderData",
      order_number: number,
      order_status: number,
      tot_ordered_items: number,
      tot_amnt: number,
      farm_name: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateMilkSubscription = {
  onCreateMilk?:  {
    __typename: "Milk",
    id: string,
    image: string,
    farmName: string,
    itemName: string,
    price: number,
    minNoOfItemPurchase: number,
    availableQuantity: number,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateMilkSubscription = {
  onUpdateMilk?:  {
    __typename: "Milk",
    id: string,
    image: string,
    farmName: string,
    itemName: string,
    price: number,
    minNoOfItemPurchase: number,
    availableQuantity: number,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteMilkSubscription = {
  onDeleteMilk?:  {
    __typename: "Milk",
    id: string,
    image: string,
    farmName: string,
    itemName: string,
    price: number,
    minNoOfItemPurchase: number,
    availableQuantity: number,
    rating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategoriesSubscription = {
  onCreateCategories?:  {
    __typename: "categories",
    id: string,
    cardName: string,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategoriesSubscription = {
  onUpdateCategories?:  {
    __typename: "categories",
    id: string,
    cardName: string,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategoriesSubscription = {
  onDeleteCategories?:  {
    __typename: "categories",
    id: string,
    cardName: string,
    title: string,
    image: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateFaqsDataSubscription = {
  onCreateFaqsData?:  {
    __typename: "faqsData",
    sectionHeader: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateFaqsDataSubscription = {
  onUpdateFaqsData?:  {
    __typename: "faqsData",
    sectionHeader: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteFaqsDataSubscription = {
  onDeleteFaqsData?:  {
    __typename: "faqsData",
    sectionHeader: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "user",
    userName: string,
    email: string,
    authenticated: boolean,
    deliveryLocation: string,
    country: string,
    city: string,
    zipcode: boolean,
    totalNoOfItems: number,
    totalNoOfOrdersMade: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "user",
    userName: string,
    email: string,
    authenticated: boolean,
    deliveryLocation: string,
    country: string,
    city: string,
    zipcode: boolean,
    totalNoOfItems: number,
    totalNoOfOrdersMade: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "user",
    userName: string,
    email: string,
    authenticated: boolean,
    deliveryLocation: string,
    country: string,
    city: string,
    zipcode: boolean,
    totalNoOfItems: number,
    totalNoOfOrdersMade: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "cart",
    id: string,
    image: string,
    farmName: string,
    itemname: string,
    minNoOfItemPurchase: number,
    price: number,
    orderCount: number,
    totalPice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "cart",
    id: string,
    image: string,
    farmName: string,
    itemname: string,
    minNoOfItemPurchase: number,
    price: number,
    orderCount: number,
    totalPice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "cart",
    id: string,
    image: string,
    farmName: string,
    itemname: string,
    minNoOfItemPurchase: number,
    price: number,
    orderCount: number,
    totalPice: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePayDetailsSubscription = {
  onCreatePayDetails?:  {
    __typename: "payDetails",
    mrp_total: number,
    prod_discount: number,
    tot_amount: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePayDetailsSubscription = {
  onUpdatePayDetails?:  {
    __typename: "payDetails",
    mrp_total: number,
    prod_discount: number,
    tot_amount: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePayDetailsSubscription = {
  onDeletePayDetails?:  {
    __typename: "payDetails",
    mrp_total: number,
    prod_discount: number,
    tot_amount: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrderDataSubscription = {
  onCreateOrderData?:  {
    __typename: "orderData",
    order_number: number,
    order_status: number,
    tot_ordered_items: number,
    tot_amnt: number,
    farm_name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrderDataSubscription = {
  onUpdateOrderData?:  {
    __typename: "orderData",
    order_number: number,
    order_status: number,
    tot_ordered_items: number,
    tot_amnt: number,
    farm_name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrderDataSubscription = {
  onDeleteOrderData?:  {
    __typename: "orderData",
    order_number: number,
    order_status: number,
    tot_ordered_items: number,
    tot_amnt: number,
    farm_name: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
