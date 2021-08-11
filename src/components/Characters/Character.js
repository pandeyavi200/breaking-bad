import { Card } from "@material-ui/core";
import './Character.css'
import ContentModal from "../ContentModal/ContentModal";
const Character=({item})=>{
return(
    <>
    <ContentModal key={item.char_id} id={item.char_id} item={item}>
    <Card className="card">
        <div>{item.name}</div>
        <div>{item.occupation}</div>
        <div>{item.birthday}</div>
        <div>{item.status}</div>
    </Card>
    </ContentModal>
    </>
)
}

export default Character;