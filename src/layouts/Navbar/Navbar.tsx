import {
  Box,
  HStack,
  Stack,
  Image,
  Input,
  Icon,
  Text,
  Menu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Wrap,
  WrapItem,
  Square,
  Divider,
  Center,
  VStack,
  StackItem,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,

} from "@chakra-ui/react";
import logo from "../../Images/logo.png";
import promoImg from "../../Images/promo-img.webp";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import { TfiBell } from "react-icons/tfi";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const [newQuery, setNewQuery] = useState("");
  const navigate = useNavigate();
  const { onOpen, onClose, isOpen } = useDisclosure();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewQuery(e.currentTarget.value);
  };

  const handleSubmit = () => {
    if (newQuery === "") {
      alert("Busca un producto");
    } else {
      setNewQuery("");
      navigate(`/search/?search=${newQuery}`);
    }
  };

  const handleMouseEnter = useCallback(() => {
    onOpen();
  }, [onOpen]);

  const handleMouseLeave = useCallback(() => {
    onClose();
  }, [onClose]);
  
  
  
  return (
    <Box bg="yellow" w={"100%"} h={"100px"} p={"8px 0"} gap={"20px"}>
      
      <VStack
        p={"0"}
        w={"90%"}
        h={"100%"}
        m={"0 auto"}
        maxW={"1200px"}
        justifyContent={"center"}
        alignItems={"flex-start"}
  
      >
        
        <HStack w={"100%"} h={"40px"} justifyContent={"space-between"}>
          <HStack p={"0"} spacing={"6"}>
            <Box w={"170px"}>
              <Image
                src={logo}
                objectFit="contain"
                marginLeft="-9px"
                onClick={() => {
                  navigate("/");
                }}
                cursor="pointer"
              />
            </Box>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <HStack
                w={"600px"}
                bg={"#fff"}
                h={"100%"}
                alignItems="center"
                boxShadow={"md"}
              >
                <Input
                  value={newQuery}
                  h="100%"
                  maxW={"600px"}
                  borderRadius={"none"}
                  border={"none"}
                  placeholder={"Buscar productos, marcas y más..."}
                  onChange={handleChange}
                  variant="unstyled"
                  paddingLeft="12px"
                />
                <Center height={"25px"}>
                  <Divider orientation={"vertical"} />
                </Center>
                <Square
                  size={"40px"}
                  border={""}
                  cursor={"pointer"}
                  onClick={handleSubmit}
                >
                  <Icon as={AiOutlineSearch} />
                </Square>
              </HStack>
            </form>
          </HStack>
          <Image src={promoImg} h={"40px"} />
        </HStack>

        <HStack
          w={"100%"}
          m={"0"}
          h={"40px"}
          fontSize={"14px"}
          justifyContent={"space-between"}
          alignItems={"flex-end"}
          color={"var(--chakra-colors-blackAlpha-600)"}
        
        >
          <HStack spacing={12}>
            <Stack alignItems="center" direction="row" spacing={1}>
              <Icon as={GoLocation} height={6} width={6} />
              <Stack spacing={0} >
                <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                  Enviar a Mariela
                </Text>
                <Text color="blackAlpha.900" fontSize="sm" lineHeight="normal">
                  Paseo Central R...
                </Text>
              </Stack>
            </Stack>

            <Breadcrumb 
            separator={""}>
  
              <BreadcrumbItem>
                <Popover
                  isOpen={isOpen}
                  onClose={onClose}
                  closeOnBlur={true}
                  closeOnEsc={true}
                  
                >
                  <PopoverTrigger>
                    <BreadcrumbLink
                    
                      display={"flex"}
                      alignItems={"center"}
                      gap={"2"}
                      _hover={{
                        textDecoration: "none",
                      }}
                      onMouseEnter={handleMouseEnter}
                    >
                      Categoría
                      <Icon
                        as={MdKeyboardArrowDown}
                        position={"relative"}
                        top={"2px"}
                        w={"12px"}
                        h={"12px"}
                      />
                    </BreadcrumbLink>
                  </PopoverTrigger>
                  <PopoverContent
                    bg={"#333"}
                    border={0}
                    w={250}
                    h={"auto"}
                    color={"#fff"}
                    fontSize={"13px"}
                    fontWeight={"bolder"}
                    lineHeight={"2"}
                    display={"block"}
                    padding={"12px 20px"}
                    overflow={"hidden"}
                    onMouseLeave={handleMouseLeave}
                    position={"relative"}
                    zIndex={"-1"}
                  >
                    
                    <PopoverArrow 
                      width='30px !important' 
                      height='30px !important'
                      left='23px !important'
                      zIndex='1 !important'
                      position='absolute'
                      />
                 
                    
                    <Menu>
          

                      <MenuItem as='a' href='#'>Vehículos</MenuItem>
                      <MenuItem as='a' href='#'>Inmuebles</MenuItem>
                      <MenuItem as='a' href='#'>Supermercado</MenuItem>
                      <MenuItem as='a' href='#'>Tecnología</MenuItem>
                      <MenuItem as='a' href='#'>Accesorios para Vehículos</MenuItem>
                      <MenuItem as='a' href='#'>Electrodomésticos</MenuItem>
                      <MenuItem as='a' href='#'>Hogar Muebles</MenuItem>
                      <MenuItem as='a' href='#'>Belleza y cuidado personal</MenuItem>
                      <MenuItem as='a' href='#'>Moda</MenuItem>
                      <MenuItem as='a' href='#'>Deportes y Fitness</MenuItem>
                      <MenuItem as='a' href='#'>Herramientas</MenuItem>
                      <MenuItem as='a' href='#'>Construcción</MenuItem>
                      <MenuItem as='a' href='#'>Compra Internacional</MenuItem>
                      <MenuItem as='a' href='#'>Farmacias</MenuItem>
                      <MenuItem as='a' href='#'>Salud y Equipamiento Médico</MenuItem>
                      <MenuItem as='a' href='#'>Productos Sustentables</MenuItem>
                      <MenuItem as='a' href='#'>Industrias y Oficinas</MenuItem>
                      <MenuItem as='a' href='#'>Ver más categorias</MenuItem>
                  
                    </Menu>
                  </PopoverContent>
                </Popover>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Ofertas</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Historial</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  <span
                    style={{
                      position: "absolute",
                      left: "auto",
                      right: "auto",
                      marginLeft: "29px",
                      marginTop: "-6px",
                      backgroundColor: "#3483fa",
                      borderRadius: "8px",
                      fontWeight: "bolder",
                      textTransform: "uppercase",
                      fontSize: "8px",
                      padding: "1px 3px",
                      lineHeight: "1em",
                      color: "#fff",
                      display: "inline-block",
                    }}
                  >
                    nuevo
                  </span>
                  Supermercado
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Moda</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Vender</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Ayuda</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>

          <Wrap color={"var(--chakra-colors-blackAlpha-800)"}>
            <WrapItem
              display={"flex"}
              alignItems={"flex-start"}
              gap={"1"}
              cursor="pointer"
            >
              <Icon as={HiOutlineUser} w={"20px"} h={"20px"} /> Mariela
              <Icon
                as={MdKeyboardArrowDown}
                color={"GrayText"}
                w={"12px"}
                h={"24px"}
                marginLeft={"1px"}
                marginRight={"8px"}
              />
            </WrapItem>
            <WrapItem cursor="pointer">Mis compras</WrapItem>
            <WrapItem cursor="pointer">
              Favoritos
              <Icon
                as={MdKeyboardArrowDown}
                position={"relative"}
                color={"GrayText"}
                w={"12px"}
                h={"12px"}
                margin={"4px"}
              />
            </WrapItem>
            <WrapItem>
              <Wrap>
                <StackItem>
                  <span
                    style={{
                      position: "relative",
                      top: "-38%",
                      left: "60%",
                      backgroundColor: "red",
                      borderRadius: "3px",
                      fontSize: "10.5px",
                      padding: "0px 3.5px",
                      color: "#fff",
                    }}
                  >
                    1
                  </span>
                  <Icon as={TfiBell} h="20px" w="20px" cursor="pointer" />
                </StackItem>
                <WrapItem>
                  <Icon
                    as={AiOutlineShoppingCart}
                    h="20px"
                    w="20px"
                    cursor="pointer"
                  />
                </WrapItem>
              </Wrap>
            </WrapItem>
          </Wrap>
        </HStack>
      </VStack>
    </Box>
  );
}
