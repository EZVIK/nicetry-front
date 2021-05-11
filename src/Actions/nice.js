import { RA } from '../utils'

export const NiceActions = {
  GetNiceById,
  GetNiceList
}

 function GetNiceById(id) {

  return RA.HttpRequest("GET", "nice/"+ id, {}, {});
}


 function GetNiceList(pageSize=10, pageIndex=1) {
   console.log("WTF")

   const data = {
     "page_size": pageSize,
     "page_index": pageIndex
   };

   return RA.HttpRequest("GET", "nice", data, {});
}

