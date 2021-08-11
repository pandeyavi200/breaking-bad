import { Pagination } from "@material-ui/lab"
export const CustomPagination = ({setPage,numofpages=7}) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
      };
    
    return (
        <div 
        style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        marginBottom:20,
      }}
        >
            <Pagination 
                count={numofpages}
                onChange={(e) => handlePageChange(e.target.textContent)}
                color="primary"
                hideNextButton
                hidePrevButton
            />
        </div>
    )
}
