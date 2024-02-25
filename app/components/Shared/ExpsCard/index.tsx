import {
  Text,
  Card,
  Heading,
  Image,
  Stack,
  Badge,
  CardBody,
  CardFooter,
  Link,
  Flex,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { nanoid } from "nanoid"

const ExpsCard = ({ props }: any) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={props.thumbnail}
        alt={props.title}
      />
      <Stack>
        <CardBody>
          <Heading pb="2" size="sm">
            <Link href={props.deployedURL} textColor="#3498db" target="_blank">
              {props.companyName}
            </Link>
          </Heading>
          <Heading pb="2" size="sm">
          {props.jobTitle}
          </Heading>
          <Text pb="5" fontSize="xs" fontWeight="semibold" opacity={0.6}>
          {props.startDate}
            {props.endDate ? ` - ${props.endDate}` : ""}
          </Text>
          <Text pb="2" fontSize="sm">
            {props.description}
          </Text>
        </CardBody>
        <CardFooter>
          <Text fontSize="xs">
            <Link href={props.companyURL} target="_blank">
              View Company <ExternalLinkIcon />
            </Link>
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default ExpsCard
