import { Box, Button, Flex, Input, Text } from "@chakra-ui/react"
import { Connection, Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmRawTransaction } from "@solana/web3.js"
import { useEffect, useState } from "react"
import * as buffer from "buffer"



const TransferForm = () => {
    const [fromAddr, setfFromAddr] = useState('0')
    const [toAddr, setToAddr] = useState('0')

    const connection = new Connection(clusterApiUrl('devnet'))
    const keypairFrom = Keypair.generate()
    const keypairTo = Keypair.generate()
    const setAccounts = () => {
        setfFromAddr(keypairFrom)
        setToAddr(keypairTo)
    }

    const transferHandler = async(e) => {
        e.preventDefault()
        window.Buffer = buffer.Buffer;

        const transaction = new Transaction()
        const transactionInstruction = SystemProgram.transfer({
            fromPubkey:fromAddr.publicKey,
            toPubkey:toAddr.publicKey,
            lamports:LAMPORTS_PER_SOL * 1
        })

        transaction.add(transactionInstruction)
        const signature = await sendAndConfirmRawTransaction(connection,transaction,[keypairFrom])
        console.log(signature)
    }
useEffect(() => {
setAccounts()

},[])
    return(
        <Flex w='100%' gap='2rem' flexDir='column'>

            <Box border='1px solid white' p='1rem' borderRadius='15px'>

           <Text >{keypairFrom.publicKey.toBase58()}</Text>
            </Box>
            <Box border='1px solid white' borderRadius='15px' p='1rem' >
           <Text>{keypairTo.publicKey.toBase58()}</Text>
            </Box>
            <Button onClick={transferHandler} colorScheme='purple'>Transfer !</Button>
       
        <Flex>

        </Flex>
        </Flex>
    )
}


export default TransferForm;