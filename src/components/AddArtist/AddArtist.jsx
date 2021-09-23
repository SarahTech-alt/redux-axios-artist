import axios from 'axios';

function AddArtist() {

const addNewArtist = event = => {
    axios({
        
    })

}

    return (
        <>
        <form>
            <input type="text"
            placeholder="Artist name"
            onChange={(event) => addNewArtist(event.target.value)}/>
            <button>Add Artist</button>
        </form>
        
        </>
    );
}

export default AddArtist;