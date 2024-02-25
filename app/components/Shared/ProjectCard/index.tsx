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

const ProjectCard = ({ props }: any) => {
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
          <Link
            href={props.deployedURL}
            textColor="#3498db"
            target="_blank"
            fontSize="md"
            fontWeight={"bold"}
          >
            {props.title + " "}
            <ExternalLinkIcon />
          </Link>{" "}
          {props.isLived && (
            <Badge variant="outline" colorScheme="green">
              Live
            </Badge>
          )}
          {props.isOnProgress && (
            <Badge ml="4px" variant="outline" colorScheme="cyan">
              Developing
            </Badge>
          )}
          <Text pb="2" fontSize="xs" fontWeight="semibold" opacity={0.6}>
            {props.startDate}
            {props.endDate ? ` - ${props.endDate}` : ""}
          </Text>
          <Text pb="2" fontSize="sm">
            {props.description}
          </Text>
          <Flex flexWrap={"wrap"} columnGap="10px" rowGap="10px">
            {props.stacks.length
              ? props.stacks.map((stack: any) => (
                  <Badge key={nanoid()}>{stack}</Badge>
                ))
              : ""}
          </Flex>
        </CardBody>
        <CardFooter>
          <Text fontSize="xs">
            <Link href={props.gitHubURL} target="_blank">
              View Source <ExternalLinkIcon />
            </Link>
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default ProjectCard
