// Part 1
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Question 1
const customerInfo = (order) => {
  return `Hello Ana Silveira, delivery to: ${order.name}, phone number: ${order.phoneNumber}, ${order.address.street}, nº: ${order.address.number}, AP: ${order.address.apartment}.`;
};

console.log(customerInfo(order));

// Question 2
const orderModifier = (order, buyer) => {
  return `Hello ${order.name = buyer}, the total price of your ${Object.keys(order.order.pizza)} and ${order.order.drinks.coke.type} order is ${order.payment = 'R$ 50,00.'}`;
};

console.log(`\n ${orderModifier(order, 'Luiz Silva')}`);
