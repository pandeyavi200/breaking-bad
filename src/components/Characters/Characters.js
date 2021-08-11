import Character from "./Character";
const Characters=({data,page})=>{
   
    return(
     data.slice(10*page-10, 10*page).map( item=>{
        return( 
        <>
        <Character key={item.char_id} item={item}/>
        </>
            )
     })
    );
}
export default Characters;