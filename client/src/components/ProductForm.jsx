import {useState} from 'react';

const ProductForm = (props) => {
    // FOR FORM INPUT
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [isFavorited, setIsFavorited] = useState();

    // FORM ONSUBMIT FUNCTION
    const formSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products/new", {title, price, description, isFavorited})
            .then( res => console.log(res.data))
            .catch( err => console.log(err))

        console.log("Form Submitted: " + title, price, description, isFavorited);

        setTitle("");
        setPrice(0);
        setDescription("");
        setIsFavorited();
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <p>
                    Title: <input type="text" onChange={ (e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    Price: <input type="number" min="0.99" onChange={ (e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    Description: <input type="text" onChange={ (e) => setDescription(e.target.value)} value={description}/>
                </p>
                <p>
                    : <input type="text" onChange={ (e) => setTitle(e.target.value)} value={title}/>
                </p>


            </form>
        </div>

    )

}