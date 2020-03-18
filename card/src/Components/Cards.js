import React, {useState} from 'react'
import { Card, Icon } from 'semantic-ui-react'


// const extra = (
//   <a>
//     <Icon name='user' />
//     16 Friends
//   </a>
// )
const [state, setState] = useState([
    {
        name: 'Bob',
        age: 27
    },
    {
        name: 'Bart',
        age: 37
    },
    {
        name: 'Bryan',
        age: 25
    },
    {
        name: 'Bill',
        age: 87
    },
    {
        name: 'Brett',
        age: 54
    },
    {
        name: 'Brad',
        age: 76
    },
    {
        name: 'Ben',
        age: 22
    },
])

const Cards = () => (
  <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    Cards={Cards}
  />
)

export default Cards