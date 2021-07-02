import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import hats from './assets/hats.png';
import Jackets from './assets/Jackets.png';
import Mens from './assets/Mens.png';
import Sneakers from './assets/Sneakers.png';
import Women from './assets/Women.png';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            section : [
                {
                    title: 'Hats',
                    imageUrl: hats,
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'Jackets',
                    imageUrl: Jackets,
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'Sneakers',
                    imageUrl: Sneakers,
                    id: 3,
                    linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'Womens',
                    imageUrl: Women,
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                  },
                  {
                    title: 'Mens',
                    imageUrl: Mens,
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                  }
                ]
        }
    }

    render() {
        return (
          <div className="directory-menu">
            {
            this.state.section.map(({title,imageUrl,size,id,linkUrl}) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
            ))
            }
          </div>
        )
    }
}

export default Directory;