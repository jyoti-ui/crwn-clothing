import hats from './assets/hats.png';
import jackets from './assets/jackets.png';
import men from './assets/men.png';
import sneakers from './assets/sneakers.png';
import womens from './assets/womens.png';

const INITIAL_STATE = {
    sections : [
      {
        title: 'Hats',
        imageUrl: hats,
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'Jackets',
        imageUrl: jackets,
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'Sneakers',
        imageUrl: sneakers,
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'Womens',
        imageUrl: womens,
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'Mens',
        imageUrl: men,
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
}

    const directoryReducer = (state=INITIAL_STATE, action) => {
        switch(action.type) {
            default :
            return state;
        }
    }

    export default directoryReducer;