import { Flex } from "@chakra-ui/react"
import TransferForm from "../../components/TransferForm/TransferForm";




const TransferSol = () => {

    return(
        <Flex w='100vw' color='white' h='100vh' justify='center' align='center' bgColor='blackAlpha.800'>
            <Flex border='1px solid white' w='35rem' h='30rem'>
                <TransferForm />
            </Flex>
        </Flex>
    )

}


export default TransferSol;