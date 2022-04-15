import { Box, Button, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => (
    <Box textAlign="center" p="5" color="gray.600" borderTop="1px" borderColor="gray.100">
        Manuchim, 2022. For Dwell Homes Inc.
        <Spacer />
        <Link href="https://github.com/mxnuchim" passHref>
            <Button color="gray.700">Github</Button>
        </Link>
    </Box>
    
)

export default Footer;