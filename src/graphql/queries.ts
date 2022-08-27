/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMilk = /* GraphQL */ `
  query GetMilk($id: ID!) {
    getMilk(id: $id) {
      id
      image
      farmName
      itemName
      price
      minNoOfItemPurchase
      availableQuantity
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMilks = /* GraphQL */ `
  query ListMilks(
    $filter: ModelMilkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMilks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMilks = /* GraphQL */ `
  query SyncMilks(
    $filter: ModelMilkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMilks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getButter = /* GraphQL */ `
  query GetButter($id: ID!) {
    getButter(id: $id) {
      id
      image
      farmName
      itemName
      price
      minNoOfItemPurchase
      availableQuantity
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listButter = /* GraphQL */ `
  query ListButter(
    $filter: ModelButterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listButter(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncButter = /* GraphQL */ `
  query SyncButter(
    $filter: ModelButterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncButter(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getButterMilk = /* GraphQL */ `
  query GetButterMilk($id: ID!) {
    getButterMilk(id: $id) {
      id
      image
      farmName
      itemName
      price
      minNoOfItemPurchase
      availableQuantity
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listButterMilks = /* GraphQL */ `
  query ListButterMilks(
    $filter: ModelButterMilkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listButterMilks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncButterMilks = /* GraphQL */ `
  query SyncButterMilks(
    $filter: ModelButterMilkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncButterMilks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPaneer = /* GraphQL */ `
  query GetPaneer($id: ID!) {
    getPaneer(id: $id) {
      id
      image
      farmName
      itemName
      price
      minNoOfItemPurchase
      availableQuantity
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPaneers = /* GraphQL */ `
  query ListPaneers(
    $filter: ModelPaneerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPaneers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPaneers = /* GraphQL */ `
  query SyncPaneers(
    $filter: ModelPaneerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPaneers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCheese = /* GraphQL */ `
  query GetCheese($id: ID!) {
    getCheese(id: $id) {
      id
      image
      farmName
      itemName
      price
      minNoOfItemPurchase
      availableQuantity
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCheeses = /* GraphQL */ `
  query ListCheeses(
    $filter: ModelCheeseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheeses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCheeses = /* GraphQL */ `
  query SyncCheeses(
    $filter: ModelCheeseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCheeses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMilkPowder = /* GraphQL */ `
  query GetMilkPowder($id: ID!) {
    getMilkPowder(id: $id) {
      id
      image
      farmName
      itemName
      price
      minNoOfItemPurchase
      availableQuantity
      rating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMilkPowders = /* GraphQL */ `
  query ListMilkPowders(
    $filter: ModelMilkPowderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMilkPowders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMilkPowders = /* GraphQL */ `
  query SyncMilkPowders(
    $filter: ModelMilkPowderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMilkPowders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        farmName
        itemName
        price
        minNoOfItemPurchase
        availableQuantity
        rating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      id
      cardName
      title
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cardName
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cardName
        title
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFaqsData = /* GraphQL */ `
  query GetFaqsData($id: ID!) {
    getFaqsData(id: $id) {
      sectionHeader
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFaqsData = /* GraphQL */ `
  query ListFaqsData(
    $filter: ModelFaqsDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFaqsData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sectionHeader
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFaqsData = /* GraphQL */ `
  query SyncFaqsData(
    $filter: ModelFaqsDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFaqsData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        sectionHeader
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userName
      email
      authenticated
      deliveryLocation
      country
      city
      zipcode
      totalNoOfItems
      totalNoOfOrdersMade
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userName
        email
        authenticated
        deliveryLocation
        country
        city
        zipcode
        totalNoOfItems
        totalNoOfOrdersMade
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        userName
        email
        authenticated
        deliveryLocation
        country
        city
        zipcode
        totalNoOfItems
        totalNoOfOrdersMade
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      image
      farmName
      itemname
      minNoOfItemPurchase
      price
      orderCount
      totalPice
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        farmName
        itemname
        minNoOfItemPurchase
        price
        orderCount
        totalPice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        image
        farmName
        itemname
        minNoOfItemPurchase
        price
        orderCount
        totalPice
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPayDetails = /* GraphQL */ `
  query GetPayDetails($id: ID!) {
    getPayDetails(id: $id) {
      mrp_total
      prod_discount
      tot_amount
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPayDetails = /* GraphQL */ `
  query ListPayDetails(
    $filter: ModelPayDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        mrp_total
        prod_discount
        tot_amount
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPayDetails = /* GraphQL */ `
  query SyncPayDetails(
    $filter: ModelPayDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPayDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        mrp_total
        prod_discount
        tot_amount
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrderData = /* GraphQL */ `
  query GetOrderData($id: ID!) {
    getOrderData(id: $id) {
      order_number
      order_status
      tot_ordered_items
      tot_amnt
      farm_name
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrderData = /* GraphQL */ `
  query ListOrderData(
    $filter: ModelOrderDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        order_number
        order_status
        tot_ordered_items
        tot_amnt
        farm_name
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderData = /* GraphQL */ `
  query SyncOrderData(
    $filter: ModelOrderDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        order_number
        order_status
        tot_ordered_items
        tot_amnt
        farm_name
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
