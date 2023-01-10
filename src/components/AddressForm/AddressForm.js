import { Input } from "@chakra-ui/react"
import * as web3 from "@solana/web3.js"


const AddressForm = ({onGetData}) => {

const addressHandler = (e) => {
    e.preventDefault()
    const addr = new web3.PublicKey(e.target.address.value)
    return onGetData(addr)
}
    return(
        <form onSubmit={addressHandler}>
            <Input placeHolder='address' name='address' type='text' />
            <Input type='submit' />
        </form>
    )

}

export default AddressForm;