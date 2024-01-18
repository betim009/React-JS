import { useContext } from "react";
import Context from "../../context/Context";
import Card from "../../components/Card";


function Search() {

    const { search } = useContext(Context);



    return (
        <div className="container">
                <Card filme={search} />
        </div>
    )
}

export default Search;