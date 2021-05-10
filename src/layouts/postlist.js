import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'umi';
import { authActions } from '../utils/index'

 export function PostList() {
   
   const [posts, setPosts] = useState([]);
   const [count, setCount] = useState(10);


   const menu = [
      { id: 1, name: "Weekly Challenge"},
      { id: 2, name: "Happy Hour"},
      { id: 3, name: "猫滚键盘"}
    ]

   const handleData = async (jwt) => {
    let data = JSON.stringify({
      "page_size": count,
      "page_index": 1
    });
    
    var config = {
      method: 'get',
      url: 'http://localhost:6079/api/v1/nice',
      headers: { 
        'token': jwt,
        'Content-Type': 'application/json'
      },
      data : data
    };
    // console.log(config)
    

    let response = posts

    const resData = await axios(config)

    console.log(JSON.stringify(resData.data.code))

    if (resData.data.code !== 200) {
      response = [{
          ID: Math.random() * 1000,
          title: "#NiCETRY# EP 土星这样看来非常电竞，像是一颗电竞行星",
          user:{
            avatar: "https://cdn.v2ex.com/avatar/989b/e5d1/475809_normal.png?m=1612707621"
          },
          thumbs_up: 666,
          UpdatedAt: "2021-04-26T09:32:39.898+08:00",
      }]
    } else if (resData.data.code === 200) {
      response = resData.data.data
    }

    setPosts(response)
   }

   useEffect(() => {
    const jwt = authActions.checkJwt()
    handleData(jwt)
   },[]);

  //  const handlePush = () => {
  //     let s = {
  //       ID: Math.random() * 1000,
  //       title: "#NiCETRY# EP 土星这样看来非常电竞，像是一颗电竞行星",
  //       user:{
  //         avatar: "https://cdn.v2ex.com/avatar/989b/e5d1/475809_normal.png?m=1612707621"
  //       },
  //       thumbs_up: 666,
  //       UpdatedAt: "2021-04-26T09:32:39.898+08:00",
  //     }

  //     posts.push(s)
  //     setPosts(posts)
  //     setCount(count + 1)
  //  }
  // #EF4444
   return (
     <div className="w-10/12 mx-auto flex flex-col mt-10  ">
       {/* <button className="text-5xl" onClick={handlePush} value="Don't Click"  > Don't Click </button> */}
       


       <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
           <div className="shadow overflow-hidden border-b border-gray-200">
             
             <table className="min-w-full divide-y divide-gray-200">
               <tbody className="bg-white divide-y divide-gray-200">
                  <tr key={"NODEBAR"}>          
                    <td className="px-6 py-4 whitespace-nowrap">
                      {
                        menu.map( (menu) => (
                          <div key={menu.id} className="float-left text-xl p-4 ml-4">
                            <a href="#">  {menu.name} </a>
                          </div>
                        ))
                      }  
                    </td>
                  </tr>
                 
                 {posts.map((person) => (
                   <tr key={person.ID}>
                     <td className="px-6 py-4 whitespace-nowrap">
                       <div className="flex items-center">
                         <div className="flex-shrink-0 h-10 w-10">
                           <img className="h-10 w-10 rounded" src={person.user.avatar} alt="" />
                         </div>
                         <div className="ml-4">
                           <div className="text-lg font-medium text-gray-900">
                              <Link to={'/c/'+ person.no_number}>{person.title}</Link>
                           </div>
                         </div>
                       </div>
                     </td>

                     <td className="px-6 py-4 whitespace-nowrap">
                       <div className="float-left text-sm text-gray-900 mr-5">{person.nice_view}</div>
                       <div className="text-sm text-gray-900">{person.thumbs_up}</div>
                       <div className="text-sm text-gray-500">{person.UpdatedAt}</div>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>

           </div>
         </div>

       </div>
     </div>
   )
 }