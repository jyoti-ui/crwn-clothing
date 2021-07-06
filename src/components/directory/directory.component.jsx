import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import hats from './assets/hats.png';
import jackets from './assets/jackets.png';
import men from './assets/men.png';
import sneakers from './assets/sneakers.png';
import womens from './assets/womens.png';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            section : [
                {
                    title: 'Hats',
                    imageUrl: hats,
                    id: 1,
                    linkUrl: 'hats'
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
    }


    render() {
        return (
          <div className="directory-menu">
            {
            this.state.section.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
            }
          </div>
        )
    }
}

export default Directory;