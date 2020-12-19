import React , {useState} from 'react';
import Accordian  from './components/Accordian';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Search from  './components/Search';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'What use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components.'
    }
]

const option = [
    {
        label: 'The Color Red',
        value: 'Red'
    },
    {
        label: 'The Color Green',
        value: 'Green'
    },
    {
        label: 'The Shade of Blue',
        value: 'Blue'
    }
]
export default () => {
    const [selected, setSelected] = useState(option[0]);
    const [showDropdown,setShowDropdown] = useState(true);
    
    return (
    <div>
        <Header />
      <Route path="/">
          <Accordian items={items} />
      </Route>
      <Route path="/translate">
          <Translate />
      </Route>
      <Route path ="/list">
          <Search />
      </Route>
      <Route path ="/dropdown">
          <Dropdown  label ="Select a Color" selected={selected} onSelectChange={setSelected} options={option} />
      </Route>

    </div>
      );
};

//<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button> 
     //   {showDropdown ?
     //   (<Dropdown selected={selected} onSelectChange={setSelected} options={option} />) : null
     //   } 