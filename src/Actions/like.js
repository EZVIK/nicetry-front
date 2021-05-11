import { RA } from '../utils'

export const LikeActions = {
   AddLike
}

function AddLike(id, type=1) {

   var data = {
      "post_id": id,
      "like_type": type
  }

  return RA.HttpRequest("POST", "like", data, {})
}
