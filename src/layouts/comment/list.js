import { useEffect, useState } from "react";



export default function CommentList(props) {
   
   const [id, setId] = useState(0);
   const [content, setContent] = useState("");
   const [comments, setComments] = useState([]);

   const handleComments = async () => {

      setComments( [{}])
   }

   useEffect( () =>{

   }, [])
   
   return (
      <div className="mx-auto bg-green-300 pl-8">
         <div className="flex flex-row">

            <div></div>
            
            <div className="flex flex-row">
               {comments.map( (menu) => (
                  <a/>
               ))}
            </div>
            
         </div>
      </div>
   )
}