import { useEffect, useState } from "react";
import { Link  }from 'umi';
import ContentData from '../models/content'
import { LikeActions } from '../Actions'

export function Content(props) {
   
   const [content, setContent] = useState({
      "ID": 18576,
      "title": "#NiCETRY# EP77 111 先有匠人还是先有匠人精神？",
      "desc": "只需回答有或没 EP73",
      "link_suffix": "",
      "content": "# 只需回答有或没有\n#NiCETRY/EP72 只需回答有或没有\nNiCE TRY 是一个几乎每更新的闲聊播客节目，节目名称翻译成中文是「想得美」。\n欢迎登陆我们的官方网站 nicetrypod.com，在那里可以找到全部往期节目和邮箱，欢迎写信来。\n\n本期登场人物：@文森特动物园 @特梨西 @cbvivi @ 小E\n本期编辑：@特梨西\n\n本期你可能会听到：\n* cbvivi 看了奇妙的比沃格拉夫，\n* cbvivi 顺便推荐《打雪仗》和《持摄影机的人》\n* 内容太空和内容不空\n* cbvivi 把《我家的故事》第一集当成最后一集又看了一遍\n* 杜琪峰说：做错就……\n* 当下的剧在当下看\n* 文森特椭圆片单新增——Master Class\n* 狩猎解禁的露营之夜\n* 小 E 重看《发展受阻》和《绝命毒师》\n* 特特跟人吵架了\n* 文森特愿望清单新增——适马取景器\n* 上期挑战：fix something\n* cbvivi 没有修好眼镜\n* 小E修好了一台捡来的电脑\n* 文森特没有修好抽油烟机，但成功提升了庭院气质\n* 特特修好了被自己划破的新帐篷\n\n## 本期挑战：寻找匪夷所思的产品",
      "nice_view": 126,
      "thumbs_up": 28,
      "user_id": 74,
      "user": {
          "ID": 74,
          "mail": "test1112@qq.com",
          "nickname": "test2",
          "avatar": "https://cdn.v2ex.com/avatar/a9a1/d531/585_large.png?m=1491194258"
      },
      "nice_type": 1,
      "Tags": [
          {
              "ID": 2,
              "name": "Golang",
              "ParentId": 1,
              "CreatedAt": "2021-04-21T16:53:51.858+08:00",
              "UpdatedAt": "2021-04-21T16:53:51.858+08:00",
              "DeletedAt": null
          },
          {
              "ID": 5,
              "name": "Java",
              "ParentId": 1,
              "CreatedAt": "2021-04-21T16:54:41.08+08:00",
              "UpdatedAt": "2021-04-21T16:54:41.08+08:00",
              "DeletedAt": null
          },
          {
              "ID": 6,
              "name": "Rust",
              "ParentId": 1,
              "CreatedAt": "2021-04-21T16:54:44.823+08:00",
              "UpdatedAt": "2021-04-21T16:54:44.823+08:00",
              "DeletedAt": null
          }
      ],
      "comments": [],
      "no_number": "683730",
      "CreatedAt": "2021-05-07T14:49:25.699+08:00",
      "UpdatedAt": "2021-05-10T17:07:27.945+08:00",
      "DeletedAt": null
  });
   const [tag, setTag] = useState([]);
   const [thumbsUp, setThumbsUp] = useState(0)
   const [avatars, setAvatars] = useState([])



   useEffect( () =>{

      let isUnmount = false;      //这里插入isUnmount

      const fetchDetail = async () => {

        const res = await ContentData(props.id);

        if (res.data.code === 200 && !isUnmount) {  //加上判断isUnmount才去更新数据渲染组件
         const shit = res.data.data
         console.log(shit)
         setTag(shit.Tags)
         setThumbsUp(shit.thumbs_up)
         setAvatars([shit.user])
         setContent(shit);
        }
      };

      fetchDetail(); 

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