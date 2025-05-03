export const TestUsers = {
    STANDARD_USER: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    LOCKED_USER: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    PROBLEM_USER: {
        username: 'problem_user',
        password: 'secret_sauce'
    }
} as const;

export const TestProducts = {
    BACKPACK: {
        name: 'sauce-labs-backpack',
        fullName: 'Sauce Labs Backpack',
        price: 29.99
    },
    BIKE_LIGHT: {
        name: 'sauce-labs-bike-light',
        fullName: 'Sauce Labs Bike Light',
        price: 9.99
    }
} as const;

export const TestCheckoutData = {
    VALID_USER: {
        firstName: 'John',
        lastName: 'Doe',
        postalCode: '12345'
    }
} as const;
