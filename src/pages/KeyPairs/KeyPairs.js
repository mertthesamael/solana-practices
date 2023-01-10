import { Connection, Keypair, SystemProgram, Transaction, clusterApiUrl } from "@solana/web3.js";
import { useEffect, useState } from "react";

const { Flex, Button, Text } = require("@chakra-ui/react")




const KeyPairs = () => {
    const [publicKey, setPublicKey] = useState()
    const keyGen = () => {
        
        let keypair = Keypair.generate()
        setPublicKey(keypair.publicKey.toBase58())
    }

    const _keyGen = (str) => {
        // So basically with this function, you can generate infinite keypairs untill it starts with the given parameter.
        let keypair = Keypair.generate()
        while (!keypair.publicKey.toBase58().startsWith(str)) {
            keypair = Keypair.generate();
            console.log(keypair.publicKey.toBase58())
          }
    }

    return(
        <Flex justify='center' gap='2rem' flexDir='column' align='center' w='100vw' h='100vh' bgColor='blackAlpha.800'>
            <Flex textAlign='center'>
                <Text color='white' fontSize='1.5rem'>If you are not using a wallet to connect, you can generate public keys with Keypair.generate() command</Text>
            </Flex>
            <Flex justify='center' align='center' flexDir='column' gap={publicKey?'4rem':0} w='32rem' h='25rem' border='1px solid white'>
                <Flex>
            <Button colorScheme='purple' onClick={keyGen}>Generate New PublicKey</Button>
                </Flex>
            <Flex textAlign='center'>
            <Text h='auto' color='white'>{publicKey}</Text>
            </Flex>
            </Flex>
        </Flex>
    )

}

export default KeyPairs;