import { Header, Footer, NodeList } from '.'

export function FullPage(props) {

   return (
      <div>
         <Header />
            {props.content}
         <Footer />
      </div>
   )
}