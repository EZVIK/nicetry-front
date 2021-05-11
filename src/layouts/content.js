import { useEffect, useState } from "react";
import { Link  }from 'umi';
import { NiceActions } from '@/Actions';



export function Content(props) {

   const [content, setContent] = useState({});
   const [tag, setTag] = useState([]);
   const [thumbsUp, setThumbsUp] = useState(0)
   const [avatars, setAvatars] = useState([])

   useEffect( () => {

      let isUnmount = false;      //这里插入isUnmount

      const fetchDetail = async () => {
        const res = await NiceActions.GetNiceById(props.id);
        if (res.data.code === 200 && !isUnmount) {  //加上判断isUnmount才去更新数据渲染组件
          const shit = res.data.data
          console.log(shit)
          setTag(shit.Tags)
          setThumbsUp(shit.thumbs_up)
          setAvatars([shit.user])
          setContent(shit);
        }
      };

      fetchDetail().then(r => {});

      return () => isUnmount = true;   //最好return一个isUnmount

   }, [thumbsUp])

   const ClickLike = async () => {
      const aaa = await LikeActions.AddLike(content.ID, 1)
      if (aaa.data.code === 200) {
         setThumbsUp(thumbsUp + 1)
      }
   }

   return (
      <div className="container mx-auto">
         <div className="flex-grow whitespace-pre-line bg-green-200 p-10" >
            <div>
               <div className="flex-grow whitespace-pre-line bg-green-200 p-10" >
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                     <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200">
                           <table className="min-w-full divide-y divide-gray-200">
                              <tbody className="bg-white divide-y divide-gray-200">
                                 <tr key={"123"}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                       <div className="flex-shrink-0 h-10 w-10">
                                          <img className="h-10 w-10 rounded" src={
                                             "content.user.avatar"
                                             } alt="" />
                                       </div>
                                       <div className="ml-4">
                                          <div className="text-lg font-medium text-gray-900">
                                             {content.title}
                                          </div>
                                       </div>
                                    </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <Link to='/'>{"<-BACK"}</Link>


            <label className="float-left text-xl">View: {content.nice_view}</label>
            <label className="float-left text-xl">CreatedAt: {content.CreatedAt}</label>

            <button onClick={ClickLike} className="float-lef text-3xl">
               {thumbsUp}♡
            </button>

            <div >
            {
               tag.map( (t) => (
                  <button key={t.ID}className="rounded bg-blue-100 mt-4 mb-4 mr-4">#{t.name}</button>
               ))
            }
            </div>

            <div className="text-2xl bg-green-200" dangerouslySetInnerHTML={{ __html: content.content }} />
         </div>
      </div>
   )
}
