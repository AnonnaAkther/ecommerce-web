import productImg01 from "../images/product-1.png";
import productImg02 from "../images/product-2.png";
import productImg03 from "../images/product-3.png";

import productImg04 from "../images/product-4.png";
import productImg05 from "../images/product-5.png";
import productImg06 from "../images/product-6.png";
import productImg007 from "../images/product-7.png";

import productImg07 from "../images/product-8.png";
import productImg08 from "../images/product-9.png";
import productImg09 from "../images/product-10.png";
import productImg10 from "../images/product-11.png";

import productImg13 from "../images/phone-01.jpg";
import productImg14 from "../images/phone-02.jpg";
import productImg15 from "../images/phone-03.png";
import productImg16 from "../images/phone-04.jpg";
import productImg17 from "../images/phone-05.jpg";
import productImg18 from "../images/phone-06.jpg";

import productImg19 from "../images/watch-01.jpg";
import productImg20 from "../images/watch-02.jpg";
import productImg21 from "../images/watch-03.jpg";
import productImg22 from "../images/watch-04.jpg";

import productImg23 from "../images/wireless-01.png";

import productImg25 from "../images/wireless-03.png";

const products = [
  {
    id: "01",
    productName: "Nutri glow soap",
    imgUrl: productImg01,
    category: "beauty",
    allCategory: "all",
    price: 1500,
    offerPrice: 1350,
    quantity: "200g",
    description: "brightening, glowing spot less healthy skin",
    reviews: [
      {
        rating: 4.7,
        text: "Made in Thailand",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Face whitening cream ",
    imgUrl: productImg02,
    category: "beauty",
    allCategory: "all",
    price: 1500,
    quantity: "Net set 25g",
    description:
      "brightening and glowing skin in 15 day's ",
    reviews: [
      {
        rating: 4.8,
        text: "Made in Taiwan",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Real Thanaka facepack and paxmoly deep marine extra power collagen gel combo",
    imgUrl: productImg03,
    category: "beauty",
    allCategory: "all",
    price: "Combo: 1500 Single Gel: 770 Single Pack: 800",
    quantity:"Pack 250g and Gel 120ml",
    description:
      "",
    reviews: [
      {
        rating: 4.6,
        text: "Pack: Made in Thailand",
      },
      {
        rating: 4.9,
        text: "Gel: Made in Korea",
      },
    ],
    avgRating: 4.7,
  },
  
  {
    id: "04",
    productName: "Legano Hair Tonic",
    imgUrl: productImg04,
    category: "beauty",
    allCategory: "all",
    price: "1 pc: 800 2pc: 1500",
    quantity: "120ml",
    description:
      "Best For Hairfall and Hair Growth",
    reviews: [
      {
        rating: 4.6,
        text: "Made in Thailand",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Trichup Hair Oil",
    imgUrl: productImg05,
    category: "all",
    allCategory: "all",
    price: "100ml oil: 800 200ml oil: 1200",
    quantity: "Small Size: 100 ml Big Size: 200ml",
    description:
      "",
    reviews: [
      {
        rating: 4.6,
        text: "Made in India",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Body whitening combo 1 and Body PHAP spf 45+ body whitening cream",
    imgUrl: productImg06,
    category: "all",
    allCategory: "all",
    price: "beauty combo : 3000",
    quantity: "whitening cream: 250g and nutri glow soap: 200g",
    description: "",
    reviews: [
      {
        rating: 4.6,
        text: "Body cream Made in Vietnam",
      },
      {
        rating: 4.9,
        text: "Soap Made in Thailand",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "30% marine collagen cream",
    imgUrl: productImg07,
    category: "all",
    allCategory: "all",
    price: 1250,
    quantity: "50ml",
    description: "Best for elasticity Anti aiging, Wrinkle, whitening and glowing skin",
    reviews: [
      {
        rating: 4.6,
        text: "Made in korea",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "27",
    productName: "P Vita Melasma Cream",
    imgUrl: productImg007,
    category: "all",
    allCategory: "all",
    price: 1250,
    offerPrice: 1000,
    quantity:
      "Wet 10g",
    description:
      "Best For Melasma, Freckles and Dark Spot",
    reviews: [
      {
        rating: 4.6,
        text: "Made in Thailand",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Secret Tone Up Sunscreen",
    imgUrl: productImg08,
    category: "all",
    allCategory: "all",
    price: 1000,
    quantity:
      "Wet 70ml",
    description:
      "",
    reviews: [
      {
        rating: 4.6,
        text: "Made in Korea",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Nature Secret carrot soap",
    imgUrl: productImg09,
    category: "all",
    allCategory: "all",
    price: 1000,
    quantity: "Wet 350g",
    description:
      "5-10 year older mesta,till pigment dark spot everything is clean",
    reviews: [
      {
        rating: 4.6,
        text: "Made in France",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "10",
    productName: "Spot Out Whitening Cream",
    imgUrl: productImg10,
    category: "all",
    allCategory: "all",
    price: 'Mesta set : 1500',
    quantity: "1 pc soap and 1 pc cream",
    description:
      "",
    reviews: [
      {
        rating: 4.6,
        text: "",
      },
      {
        rating: 4.9,
        text: "",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "11",
    productName: "Apple iPhone 12 Pro",
    imgUrl: productImg13,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "25",
    productName: "Sakarias Armchair",
    imgUrl: productImg13,
    category: "chair",
    price: 99,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max",
    imgUrl: productImg14,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Realme 8",
    imgUrl: productImg15,
    category: "mobile",
    price: 599,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "One Plus Nord",
    imgUrl: productImg16,
    category: "mobile",
    price: 799,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Apple iPhone 13 Pro",
    imgUrl: productImg17,
    category: "mobile",
    price: 899,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: productImg18,
    category: "mobile",
    price: 699,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: productImg19,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Watch",
    imgUrl: productImg20,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "18",
    productName: "Rolex Watch",
    imgUrl: productImg21,
    category: "watch",
    price: 299,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: productImg22,
    category: "watch",
    price: 399,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "20",
    productName: "Beat Studio Wireless",
    imgUrl: productImg23,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "22",
    productName: "Beat EP Headphones",
    imgUrl: productImg25,
    category: "wireless",
    price: 199,
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!",
    reviews: [
      {
        rating: 4.8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        rating: 4.9,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    avgRating: 4.8,
  },
];

export default products;
