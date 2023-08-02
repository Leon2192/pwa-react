import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    Icon,
    Center,
    Select,
} from '@chakra-ui/react'
import countries from '../db/countries.json';
import { useState } from 'react';

console.log(countries.countries)

const avatars = [
    {
        name: 'Ryan Florence',
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUBAMAAAAevyJ8AAAAJFBMVEV0rN////+iyOrkvYLz4MnkuHP59fX58eby49jmogvlogvhtW9J8Z7RAAAAOUlEQVQY02NgoAtQQgMMghCQ4g5lQAXETYMTUQQkIlc7ogiIWC1tRBEQMzUuRBEQrHCDGYphLV0AAEFFD3bkn1H9AAAAAElFTkSuQmCC',
    },
    {
        name: 'Segun Adebayo',
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUBAMAAABohZD3AAAALVBMVEX////OESYALWKVYFqJj5KvhYl8YFmGt4twsIBTm12Xnqy/mqmDjZausLh4pHemZ7FHAAAAM0lEQVQY02NQAgMFBkZBMGCgNx8CeF0WMCADjqMFKHy+6AkofDYzAygLYowAAxPEYHrzAWxaGEz68a+dAAAAAElFTkSuQmCC',
    },
    {
        name: 'Kent Dodds',
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAUCAMAAADWUb86AAAANlBMVEXGWWZ5eJtdQ25tbJI8O25IR3dUU4DZkZqyIjT///+VlbCFhKRgX4mrU2fY1+KaJj+5fpCqqcBFmxQnAAAAh0lEQVQoz8XPSwrDMAxFUau6T0ks9bf/zXYQKBTs4kGhZ6CR0LUbQhAEBOK+DzVchSpK4VI8tqEGqSiZwmXidgw1GaZIWajLaxql406PMnUxjRomEg91PGZRSMLo5+DaxmSk9CRLHfPZGhhR72tff0qS5wNn1y6fZmvHkvZbi9FtSduX/CX6Asb+ET4hHaT8AAAAAElFTkSuQmCC',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUBAMAAABohZD3AAAALVBMVEXaEhr///8HI1fnX2VXaY3u4+aossXgNTzzrK8FIlZEWYDjTVMsRHArQ29hcpT2wFfDAAAAPUlEQVQY02MQhAABBigggi+Fyhc7eQ1V3vMhKt/VkTTzUfhKEKAIFSeFvxGV387eiMIXZkaVFw4m0XwQAAA54Rku1G10yQAAAABJRU5ErkJggg==',
    },
    {
        name: 'Christian Nwamba',
        url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAMAAAA0jaRDAAAARVBMVEXzw8jniJPIvprULkHOESbaTFzfZXP///+/yt8AK3/y9fLrzbExfGTTy8LdxJ2Tx95ecWFod5RabZGRv8XljoPhz9hwdUeV0ZjtAAAAVUlEQVQoz2PgJAQYqKGCgxBgYCcEiFBBGLBAASOvKBsLNgBTwcbFxMvFjE8FIxO/MDcrPhUiAjw8YnhVsDIJCfLhtYWFkZsBh0sJA2qEKeGYo0sKAgDUvRBpYm91IQAAAABJRU5ErkJggg==',
    },
]

const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    )
}
export default function Main() {
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleVisitSite = () => {
        const country = countries.countries.find((c) => c.name === selectedCountry);
        if (country) {
            window.location.href = country.url;
        }
    };

    return (
        <Box position={'relative'} bg={'gray.100'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 30 }}>
                <Stack spacing={{ base: 10, md: 20 }} px={{ md: 10, lg: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Bienvenidos a Solution Box
                        <Heading
                            color={'blue.500'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Mayorista de informática y telecomunicaciones
                        </Heading>

                        <Text color={'gray.600'} pt={'3'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Somos un mayorista con origen en Argentina y una trayectoria de 20 años.
                            Contamos con 11 sedes y representamos a más de 50 marcas internacionales
                            como AMD, DELL, INTEL, HUAWEI, CISCO, HP, SAMSUNG, entre otras.
                        </Text>
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    //   size={useBreakpointValue({ base: 'md', md: 'lg' })}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient: 'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>
                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'blue.500'}
                            color={'white'}
                            rounded={'full'}
                            minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                            minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'white'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Center>
                            <Avatar
                                height={150}
                                width={150}
                                src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/63e0c71aae65910001e39c8f/picture"
                            />
                        </Center>
                        <Box as={'form'} mt={10}>
                            <Stack spacing={4}>
                                <Center>
                                    <Text color={'gray.900'} fontSize={{ base: 'xl', sm: 'lg' }}>
                                        ¿A qué sucursal deseas acceder?
                                    </Text>
                                </Center>
                                <Select
                                    placeholder="Por favor, selecciona tu país"
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    value={selectedCountry}>
                                    {countries.countries.map((country) => (
                                        <option key={country.name} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </Select>
                            </Stack>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bg={'#ef233c'}
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}
                                onClick={handleVisitSite}>
                                Visitar sitio
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
            </Container>
            <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
        </Box>
    );
}
