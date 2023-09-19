import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { PlatformProps } from './types';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from "react-icons/bs"
import { IconType } from 'react-icons';
const PlatformIconList = ({ platforms }: PlatformProps) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ninetendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) =>
                <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
            )}
        </HStack>
    )
}

export default PlatformIconList;