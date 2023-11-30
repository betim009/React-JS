import { useEffect, useState } from "react"
import './App.css'


function App() {
  const [cat, setCat] = useState({
    "id": "4-5SzDNIL",
    "url": "https://cdn2.thecatapi.com/images/4-5SzDNIL.jpg",
    "width": 880,
    "height": 1100
  });

  const [bread, setBread] = useState('');


  useEffect(() => {

  }, [])


  const fetchApi = async (breed) => {
    const req = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`);
    const res = await req.json();

    return res

  };

  const handleClick = async (event) => {
    event.preventDefault();

    const [searchBread] = await fetchApi(bread);

    if (!searchBread) {
      alert('Nooo')
    }

    setCat({
      ...cat,
      ...searchBread
    });
  }



  return (
    <div>
      <img src={cat.url} alt="img-cat" />
      <h5>ID: {cat.id}</h5>
      <h5>Altura: {cat.height}</h5>
      <h5>Largura: {cat.width}</h5>
      <label>
        Bread:
        <input type="text" onChange={({ target }) => setBread(target.value)} />
      </label>
      <button onClick={handleClick}>Pesquisar</button>



    </div>
  )
}


export default App