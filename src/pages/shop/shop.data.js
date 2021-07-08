import { 
  bluebeanie,
   bluesnapback, 
   brownbrim ,
   browncowboy ,
   greenbeanie ,
   greybrim,
   palmtreecap ,
   redbeanie ,
   wolfcap ,
  
   blackshearling ,
   bluejeanjacket,
   brownshearling ,
   browntrench ,
   greyjeanjacket,

   camovest,
   floralshirt ,
   longsleeve ,
   pinkshirt ,
   polkadotshirt ,
   rollupjeanshirt ,

   adidasnmd ,
   blackconverse,
   nikebrown ,
   nikefunny ,
   nikesred ,
   timberlands ,
   whitenikehightops ,
   yeezy ,

   bluetank ,
   floralblouse,
   floralskirt ,
   redpolkadotdress,
   stripedsweater,
   whitevest ,
   yellowtracksuit ,
} from './assets/index';


const SHOP_DATA = [
    {
      id: 1,
      title: 'Hats',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: brownbrim ,
          price: 25
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl:bluebeanie ,
          price: 18
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: browncowboy,
          price: 35
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: greybrim,
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl:greenbeanie,
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl:palmtreecap,
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: redbeanie,
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: wolfcap,
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: bluesnapback,
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Adidas NMD',
          imageUrl:adidasnmd,
          price: 220
        },
        {
          id: 11,
          name: 'Adidas Yeezy',
          imageUrl:yeezy,
          price: 280
        },
        {
          id: 12,
          name: 'Black Converse',
          imageUrl:blackconverse,
          price: 110
        },
        {
          id: 13,
          name: 'Nike White AirForce',
          imageUrl:whitenikehightops,
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl:nikesred,
          price: 160
        },
      
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: nikebrown,
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: nikefunny,
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: timberlands,
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Black Jean Shearling',
          imageUrl: blackshearling,
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: bluejeanjacket,
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: greyjeanjacket,
          price : 165
        },
        {
          id: 21,
          name: 'Brown Shearling',
          imageUrl : brownshearling ,
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl : browntrench,
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'Blue Tanktop',
          imageUrl :bluetank,
          price: 25
        },
        {
          id: 24,
          name: 'Floral Blouse',
          imageUrl : floralblouse,
          price: 20
        },
        {
          id: 25,
          name: 'Floral Dress',
          imageUrl:floralskirt,
          price: 80
        },
        {
          id: 26,
          name: 'Red Dots Dress',
          imageUrl : redpolkadotdress,
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: stripedsweater,
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: yellowtracksuit,
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: whitevest,
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'Camo Down Vest',
          imageUrl:camovest,
          price: 325
        },
        {
          id: 31,
          name: 'Floral T-shirt',
          imageUrl:floralshirt,
          price: 20
        },
        {
          id: 32,
          name: 'Black & White Longsleeve',
          imageUrl:longsleeve ,
          price: 25
        },
        {
          id: 33,
          name: 'Pink T-shirt',
          imageUrl: pinkshirt,
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: rollupjeanshirt ,
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: polkadotshirt,
          price: 25
        }
      ]
    }
  ];

  export default SHOP_DATA;