import {useState} from 'react';

interface props{
    items : string[];
    onSelectItem :(item:string)=>void;
}

function ListGroup({items,onSelectItem }:props) {
//   const items = ["Jay", "Mahesh", "Harsh"];
  const[selectedIndex, setselectedIndex]= useState(-1);
  return (
    <>
    
      <ul className="list-group">
        {items.length === 0 && <p>No item found</p>}
        {items.map((item,index) => (
          <li
            className={selectedIndex===index? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={()=>{
                setselectedIndex(index);
                onSelectItem(item);
            }}
           
          
            >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
