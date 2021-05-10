import { FullPage, Content} from '../layouts'
import { useParams } from 'umi';

export default () => {

   const params = useParams();

   return (
      <div>
         <FullPage content={Content(params)} />
      </div>
   )
} 