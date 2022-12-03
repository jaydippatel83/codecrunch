import { Web3Storage } from 'web3.storage';
// import axios from "axios";

const apitoken = process.env.REACT_APP_WEB_STORAGE_API_TOKEN;
const client = new Web3Storage({ token: apitoken });


console.log(apitoken,"apitoken");
 

function addData(Item) {
    console.log(Item, "Item")
    const blob = new Blob(
        [
            JSON.stringify(Item),
        ],
        { type: "application/json" }
    );
    const files = [
        new File([blob], "data.json"),
    ];
    console.log(files);
    return files;

}

async function storeFiles(Item) {
    var array = [];
    let files = addData(Item)
    console.log(client, "client");
    const cid = await client.put(files);
    console.log(cid,"cid");
    // console.log("stored files with cid", cid);
    // axios.get(`https://${cid}.ipfs.infura-ipfs.io/data.json`)
    //     .then(function (response) {
    //         array.push(response.data);
    //         setData(array);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })

    return cid;
}
export default storeFiles;