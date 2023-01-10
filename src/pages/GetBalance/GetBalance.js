import { Flex, Text } from "@chakra-ui/react"
import AddressForm from "../../components/AddressForm/AddressForm";
import { useState } from "react";
import * as web3 from '@solana/web3.js'


const GetBalance = () => {

    const [balance, setBalance] = useState(false)
    const [executable, setExecutable] = useState()

const getBalance = async(addr) => {
    const connect = new web3.Connection(web3.clusterApiUrl('devnet'))
    const balance = await connect.getBalance(addr)
    const accInfo = await connect.getAccountInfo(addr)
    setExecutable(accInfo?.executable ?? false)
    setBalance(balance)

}
    return(
        <Flex w='100vw' flexDir='column' justify='center' align='center' color='white' h='100vh' bgColor='#181D31'>

            <Flex flexDir='column' align='center' justify='center' gap='3rem' borderRadius='10px' border='3px solid #E5BA73' p='4rem' >
            <Text>Insert an address to get the SOL balance</Text>
            <AddressForm onGetData={getBalance}></AddressForm>
            <Text color='white' fontSize='1.5rem'>{balance?balance +" SOL":"Enter an adress"  }</Text>
            </Flex>
            <Text fontSize='1.5rem'>Is Executable? {executable ?"Yes, it is" : "Nope, it is not"}</Text>
        </Flex>
    )

}

export default GetBalance;