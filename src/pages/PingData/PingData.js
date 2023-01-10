import { Button, Flex, Text, useToast } from "@chakra-ui/react"
import { Keypair, Transaction, PublicKey, TransactionInstruction, sendAndConfirmTransaction, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useState } from "react"



const PingData = () => {
    const connection = new Connection(clusterApiUrl('devnet'));
    const payer = initializeKeypair(connection)
    const [tsxUrl, setTsxUrl] = useState("Waiting for TSX")
    const toast = useToast()
    
    function initializeKeypair() {
        const keyPair = Keypair.generate()
        const secret = keyPair.secretKey
        const secretKey = Uint8Array.from(secret)
        const keypairFromSecretKey = Keypair.fromSecretKey(secretKey)
        return keypairFromSecretKey
    }
    const ping = async() => {
        const PROGRAM_ID = new PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa")
        const PROGRAM_DATA_PUBLIC_KEY = new PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod")

        const transaction =  new Transaction()
        
        const transactionInstruction = new TransactionInstruction({
            keys:[{
                
                pubkey:PROGRAM_DATA_PUBLIC_KEY,
                isSigner:false,
                isWritable:true
            }
            ],

            programId:PROGRAM_ID

        })

        transaction.add(transactionInstruction)
        console.log(transaction)
        const transactionSignature = await sendAndConfirmTransaction(connection,transaction,[payer])
        console.log(transactionSignature)
        setTsxUrl(`Transaction https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`)
    
    }

    const airDrop = async() => {
                // You can only get up to 2 SOL per request 
                console.log('Airdropping 1 SOL');
                const airdropSignature = await connection.requestAirdrop(
                    payer.publicKey,
                    LAMPORTS_PER_SOL
                    );
                    
                    try{
                const latestBlockhash = await connection.getLatestBlockhash();

                await connection.confirmTransaction({
                    blockhash: latestBlockhash.blockhash,
                    lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
                    signature: airdropSignature,
                });
            }catch(err){
                toast({
                    title:err,
                    status:'error',
                })
            }
      
    }
    return(
        <Flex w='100vw' justify='center' align='center' h='100vh'bgColor='blackAlpha.800'>
            <Flex gap='2rem'p='2rem' border='1px solid white' flexDir='column' justify='center' align='center' w='25rem' h='25rem' >
                <Flex textAlign='center'>
                    <Text color='white'>So in this part, you can interact with executable addreess. In order to to that, you need small amount SOL in your account. Since it's on devnet, here is an Airdrop button ! Have fun.</Text>
                </Flex>
                <Flex>
            <Button onClick={airDrop} colorScheme='purple'>Airdrop !</Button>
                </Flex>
                <Flex>
            <Button onClick={ping} colorScheme='purple'>Ping !</Button>
                </Flex>
                <Flex textAlign='center' maxW='100%'>
                    <Text w='100%' h='auto' color='white'>{tsxUrl}</Text>
                </Flex>
            </Flex>
            
        </Flex>
    )

}


export default PingData