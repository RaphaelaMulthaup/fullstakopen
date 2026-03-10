const Search =({onChange})=>{
return(
    <>
    <span>filter shown with</span>
    <input type="text" onChange={onChange}/>
    </>
)
}

export default Search