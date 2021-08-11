import logo from '../image/logo.png'
import { AppBar , Toolbar, InputBase,Box} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import './NavBar.css'
 const Navbar = ({getText})=>{
    return (
        <>
           <AppBar position="static" style={{backgroundColor:"#000",padding:"10px"}}>
           <Toolbar>
            <img style={{width:"100px"}} src={logo} alt="logo" />
             <Box  className="InputBox">
               <Box className="InputBox_SearchIcon">  <SearchIcon/> </Box>
                <InputBase placeholder="Search by Name" className="InputBox_Search" autoFocus 
               onChange={(e)=> getText(e.target.value)}
                 color="secondary"/>
             </Box>
            
           </Toolbar>
           </AppBar>
        </>
    )
   
}

export default Navbar;