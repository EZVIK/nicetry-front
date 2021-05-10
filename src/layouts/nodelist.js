

export function NodeList(props) {
   const menulist = [
      { id: 1, name: "Weekly Challenge"},
      { id: 2, name: "Happy Hour"},
      { id: 3, name: "猫滚键盘"}
    ]
   const menu = props.menu || menulist
   const sublist = props.sublist



   return (
      <div className="mx-auto bg-green-300 pl-8">

         <div className="flex flex-row select-none">
               {menu.map( (menu) => (
                  <div key={menu.id} className="float-left bg-green-300 text-2xl p-10">
                     <a href="#">  {menu.name} </a>
                  </div>
               ))}


         </div>

      </div>

   )
}