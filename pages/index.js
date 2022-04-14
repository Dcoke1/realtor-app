import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";


const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="grey.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="grey.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {

  return (
    <div>
      <Box>
        <Banner
          purpose={"RENT A HOME"}
          title1={"Rental Homes for"}
          title2={"Everyone"}
          desc1={"Explore Apartments, Villas, Homes"}
          desc2={"and more"}
          buttonText={"Explore Renting"}
          linkName={"/search?purpose=for-rent"}
          imageUrl={
            "https://www.ivanandmike.com/wp-content/uploads/2019/08/430-W-San-Marino-Dr-Miami-Beach-FL-33139-1170x0-c-center.jpg"
          }
        />
        <Flex flexWrap="wrap">
          {propertiesForRent.map((property) => 
            <Property property={property} key={property.id}/>
          )}
        </Flex>
        <Banner
          purpose={"BUY A HOME"}
          title1={"Find, Buy, Own Your"}
          title2={"Dream Home"}
          desc1={"Explore Apartments, Villas, Homes"}
          desc2={"and more"}
          buttonText={"Explore Buying"}
          linkName={"/search?purpose=for-sale"}
          imageUrl={
            "https://nypost.com/wp-content/uploads/sites/2/2021/12/alexa-mansions-2.jpg?quality=75&strip=all"
          }
        />
        <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => 
            <Property property={property} key={property.id}/>
          )}
        </Flex>
      </Box>
    </div>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  }
}