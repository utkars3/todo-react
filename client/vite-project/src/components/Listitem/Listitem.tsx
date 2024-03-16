
import "./Listitem.css"
import { MdDelete } from "react-icons/md";
import axios, { AxiosResponse } from 'axios';

interface ListItemProps {
  id: string;
  content: string;
}

export const ListItem: React.FC<ListItemProps> = ({ id, content }) => {

  const handledel =async (id: String | null): Promise<void> =>{
    try {
        
       

      const response: AxiosResponse =  await axios.delete(`http://localhost:8080/del/${id}`);
        console.log('Data deleted successfully:', response.data);
    } catch (error) {
        console.error('Error deleting data:', error);
    }
  };


 

  return (   
      <li className="listitem" key={id}>
        <div className="all">

            <div className="content">{content}</div>
            <div className="icons">

              <div className="icon" onClick={()=> handledel(id)}><MdDelete/></div>
       
            </div>
        </div>
        </li>
  );
};


