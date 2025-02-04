export const Constants = {
  API_ENDPOINT: {
    REGISTER_USER: 'api/Account/RegisterUser',
    LOGIN: 'api/Account/Login',
    REFRESH_TOKEN: 'api/Account/RefreshToken',
    ADD_DRIVER: 'api/Admin/AddDriver',
    ADD_VEHICLE: 'api/Admin/AddVehicle',
    FLIP_DRIVER_STATUS: 'api/Admin/FlipDriverStatus', // Include the ID parameter when using
    FLIP_VEHICLE_STATUS: 'api/Admin/FlipVehicleStatus', // Include the ID parameter when using
    UPDATE_DRIVER: 'api/Admin/UpdateDriver',
    UPDATE_VEHICLE: 'api/Admin/UpdateVehicle',
    ADD_TRAVEL_ORDER: 'api/Order/AddTravelOrder',
    ALLOCATE_ORDER: 'api/Order/AllocateOrder',
    COMPLETE_ALLOCATED_ORDER: 'api/Order/CompleteAllocatedOrder', // Include the ID parameter when using
    DELETE_TRAVEL_ORDER: 'api/Order/DeleteTravelOrder', // Include the ID parameter when using
    DELETE_ALLOCATED_ORDER: 'api/Order/DeleteAllocatedOrder', // Include the ID parameter when using
    UPDATE_ALLOCATED_ORDER: 'api/Order/UpdateAllocatedOrder',
    UPDATE_TRAVEL_ORDER: 'api/Order/UpdateTravelOrder',
    ALLOCATED_ORDER_COST: 'api/Order/AllocatedOrderCost',
    IS_VALID_DRIVER: 'api/Order/IsValidDriver',
    IS_VALID_VEHICLE: 'api/Order/IsValidVehicle',
    GET_DRIVERS: 'api/Resource/GetDrivers',
    GET_UNALLOCATED_TRAVEL_ORDERS: 'api/Resource/GetUnallocatedTravelOrders',
    GET_ALL_TRAVEL_ORDERS: 'api/Resource/GetAllTravelOrders',
    GET_ALLOCATED_ORDERS: 'api/Resource/GetAllocatedOrders',
    GET_VEHICLES: 'api/Resource/GetVehicles',
    GET_DRIVER_COUNT: 'api/Resource/GetTotalDriver',
    GET_VEHICLE_COUNT: 'api/Resource/GetTotalVehicle',
    GET_TRAVEL_ORDER_COUNT: 'api/Resource/GetTotalTravelOrder',
    GET_ALLOCATED_ORDERS_WITH_DATE: 'api/Resource/GetAllocatedOrdersWithDate',
  },
};
