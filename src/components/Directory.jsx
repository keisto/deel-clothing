import React, { Component } from 'react'
import MenuItem from './MenuItem'

import './Directory.scss'

class Directory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hat.png',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'jackets',
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'sneakers',
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          className: 'large left',
          id: 4,
          linkUrl: 'womens',
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          className: 'large right',
          id: 5,
          linkUrl: 'mens',
        },
      ],
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory
