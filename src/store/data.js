import appleImage from '/Images/apple.png';
import cabbageImage from '/Images/cabbage.png';
import cornImage from '/Images/corn.png';
import greenPepperImage from '/Images/green-pepper.png';
import lettuceImage from '/Images/lettucee.png';
import indianMaltaImage from '/Images/indian-malta.png';
import eggplantImage from '/Images/eggplant.png';
import redCapsicumImage from '/Images/capsicum.png';
import redTomatoImage from '/Images/tomato.png';
import bigPotatoImage from '/Images/potato.png';
import cauliflowerImage from '/Images/cauliflower.png';
import veggiesImage from '/Images/vegetable.png';
import fruitsImage from '/Images/fruits.png';
import fishImage from '/Images/fish.png';
import meatImage from '/Images/meat.png';
import softDrinksImage from '/Images/soft-drink.png';
import snacksImage from '/Images/snacks.png';


export const featuredProducts = [
  {
    id: 1,
    title: "Green Apple",
    price: 1.99,
    image: appleImage,
    rating: 4.5
  },
  {
    id: 2,
    title: "Cabbage",
    price: 0.99,
    image: cabbageImage,
    rating: 4.5
  },
  {
    id: 3,
    title: "Green Pepper",
    price: 1.49,
    image: greenPepperImage,
    rating: 4.0
  },
  {
    id: 4,
    title: "Corn",
    price: 0.79,
    image: cornImage,
    rating: 4.2
  },
  {    id: 5,
    title: "Lettuce",
    price: 1.29,
    image: lettuceImage,
    rating: 4.3
  }
]

export const hotDeals = [
  {
    id: 1,
    title: "Green Apple ",
    price: 1.99,
    image: appleImage,
    rating: 4.5
  },
  {
    id: 2,
    title: "Indian Malta",
    price: 0.99,
    image: indianMaltaImage,
    rating: 4.5
  },
  {
    id: 3,
    title: "Green Lettuce",
    price: 1.49,
    image: lettuceImage,
    rating: 4.0
  }
]

export const bestSellers = [
  {
    id: 1,
    title: "Eggplant", 
    price: 1.99,
    image: eggplantImage,
    rating: 4.5
  },
  {
    id: 2,
    title: "Red Capsicum",
    price: 0.99,
    image: redCapsicumImage,
    rating: 4.5
  },
  {
    id: 3,
    title: "Red Tomato",
    price: 1.49,
    image: redTomatoImage,
    rating: 4.0
  }
]

export const topRated = [ 
  {
    id: 1,
    title: "Big Potato",
    price: 1.99,
    image: bigPotatoImage,
    rating: 4.5
  },
  {
    id: 2,
    title: "Corn",
    price: 0.99,
    image: cornImage,
    rating: 4.5
  },
  {
    id: 3,
    title: "Fresh Cauliflower",
    price: 1.49,
    image: cauliflowerImage,
    rating: 4.0
  }
] 


export const TopCategories = [
  {
    id: 1,
    title: "Vegetables",
    image: veggiesImage,
    noInStore: 165
  },
  {
    id: 2,
    title: "Fresh Fruits",
    image: fruitsImage,
    noInStore: 137
  },
  {
    id: 3,
    title: "River Fish",
    image: fishImage,
    noInStore: 34,
  },
  {
    id: 4,
    title: "Meat",
    image: meatImage,
    noInStore: 78
  },
  {
    id: 5,
    title: "Water & Drinks",
    image: softDrinksImage,
    noInStore: 48
  },
  {
    id: 6,
    title: "Snacks",
    image: snacksImage,
    noInStore: 293
  }

]

export const testimonials = [
  {
  id: "TM1",
  rating: 4.8,
  comment: "The platform made everything so smooth. I wasn’t expecting it to be this easy, but honestly it saved me a lot of stress.",
  clientName: "Amelia Grant",
  clientRole: "Customer",
  clientImage: "/Images/client1.png"
  },
  {
    id: "TM2",
    rating: 4.2,
    comment: "I love the interface. It feels clean and very organized. I found exactly what I needed without wasting time.",
    clientName: "Christopher Lee",
    clientRole: "Customer",
    clientImage: "/Images/client2.png"
  },
  {
    id: "TM3",
    rating: 5.0,
    comment: "Absolutely impressive. The experience exceeded my expectations in every way. I’ll definitely be coming back.",
    clientName: "Sophia Rivera",
    clientRole: "Customer",
    clientImage: "/Images/client3.png"
  },
  {
    id: "TM4",
    rating: 4.6,
    comment: "Customer support was surprisingly fast. I asked one question and got a clear response almost immediately.",
    clientName: "Daniel Thompson",
    clientRole: "Customer",
    clientImage: "/Images/client4.png"
  },
  {
    id: "TM5",
    rating: 4.3,
    comment: "It works well. A few things could load faster, but overall I’m very satisfied with the outcome.",
    clientName: "Grace Kim",
    clientRole: "Customer",
    clientImage: "/Images/client5.png"
  },
  {
    id: "TM6",
    rating: 4.9,
    comment: "Honestly this was such a relief. The whole process is straightforward and the results were exactly what I was hoping for.",
    clientName: "Michael Carter",
    clientRole: "Customer",
    clientImage: "/Images/client6.png"
  },
  {
    id: "TM7",
    rating: 4.7,
    comment: "Very reliable. I’ve tried similar platforms and none have given me a smoother experience than this.",
    clientName: "Isabella Flores",
    clientRole: "Customer",
    clientImage: "/Images/client7.png"
  },
  {
    id: "TM8",
    rating: 4.4,
    comment: "It did everything I needed and more. I appreciate how simple the navigation is for someone like me.",
    clientName: "Marcus Allen",
    clientRole: "Customer",
    clientImage: "/Images/client8.png"
  },
  {
    id: "TM9",
    rating: 5.0,
    comment: "Top notch. I recommended it to two friends already because it just works and doesn’t waste your time.",
    clientName: "Ella Johnson",
    clientRole: "Customer",
    clientImage: "/Images/client9.png"
  },
  {
    id: "TM10",
    rating: 4.1,
    comment: "Good experience overall. I ran into a minor issue but it was resolved quickly, so I can’t complain.",
    clientName: "Jonathan Perez",
    clientRole: "Customer",
    clientImage: "/Images/client10.png"
  },
  {
    id: "TM11",
    rating: 4.9,
    comment: "Very impressed. Clean, fast, and exactly how a modern service should feel. Keep it up.",
    clientName: "Maya Brooks",
    clientRole: "Customer",
    clientImage: "/Images/client11.png"
  },
  {
    id: "TM12",
    rating: 4.5,
    comment: "It’s simple yet powerful. I didn’t feel lost at any point and everything worked as expected.",
    clientName: "Ethan Scott",
    clientRole: "Customer",
    clientImage: "/Images/client12.png"
  }
]

export const footerData = [
  {
    sectionTitle: "My Account",
    links: [
      "My Account",
      "Order History",
      "Shopping Cart",
      "Wishlist",
      "Settings"
    ]
  },
  { 
    sectionTitle: "Helps",
    links: [
      "Contact",
      "Faqs",
      "Terms and Conditions",
      "Privacy Policy",
      "Settings"
    ]
  },
  {
    sectionTitle: "About",
    links: [
      "About",
      "Shop",
      "Product",
      "Privacy Policy",
      "Track Order"
    ]
  }
]