import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MilkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type categoriesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type faqsDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type userMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type cartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type payDetailsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type orderDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Milk {
  readonly id: string;
  readonly image: string;
  readonly farmName: string;
  readonly itemName: string;
  readonly price: number;
  readonly minNoOfItemPurchase: number;
  readonly availableQuantity: number;
  readonly rating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Milk, MilkMetaData>);
  static copyOf(source: Milk, mutator: (draft: MutableModel<Milk, MilkMetaData>) => MutableModel<Milk, MilkMetaData> | void): Milk;
}

export declare class categories {
  readonly id: string;
  readonly cardName: string;
  readonly title: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<categories, categoriesMetaData>);
  static copyOf(source: categories, mutator: (draft: MutableModel<categories, categoriesMetaData>) => MutableModel<categories, categoriesMetaData> | void): categories;
}

export declare class faqsData {
  readonly id: string;
  readonly sectionHeader: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<faqsData, faqsDataMetaData>);
  static copyOf(source: faqsData, mutator: (draft: MutableModel<faqsData, faqsDataMetaData>) => MutableModel<faqsData, faqsDataMetaData> | void): faqsData;
}

export declare class user {
  readonly id: string;
  readonly userName: string;
  readonly email: string;
  readonly authenticated: boolean;
  readonly deliveryLocation: string;
  readonly country: string;
  readonly city: string;
  readonly zipcode: boolean;
  readonly totalNoOfItems: number;
  readonly totalNoOfOrdersMade: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<user, userMetaData>);
  static copyOf(source: user, mutator: (draft: MutableModel<user, userMetaData>) => MutableModel<user, userMetaData> | void): user;
}

export declare class cart {
  readonly id: string;
  readonly image: string;
  readonly farmName: string;
  readonly itemname: string;
  readonly minNoOfItemPurchase: number;
  readonly price: number;
  readonly orderCount: number;
  readonly totalPice: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<cart, cartMetaData>);
  static copyOf(source: cart, mutator: (draft: MutableModel<cart, cartMetaData>) => MutableModel<cart, cartMetaData> | void): cart;
}

export declare class payDetails {
  readonly id: string;
  readonly mrp_total: number;
  readonly prod_discount: number;
  readonly tot_amount: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<payDetails, payDetailsMetaData>);
  static copyOf(source: payDetails, mutator: (draft: MutableModel<payDetails, payDetailsMetaData>) => MutableModel<payDetails, payDetailsMetaData> | void): payDetails;
}

export declare class orderData {
  readonly id: string;
  readonly order_number: number;
  readonly order_status: number;
  readonly tot_ordered_items: number;
  readonly tot_amnt: number;
  readonly farm_name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<orderData, orderDataMetaData>);
  static copyOf(source: orderData, mutator: (draft: MutableModel<orderData, orderDataMetaData>) => MutableModel<orderData, orderDataMetaData> | void): orderData;
}