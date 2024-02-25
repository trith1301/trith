import { Text, Card, Heading, Image, Stack, CardBody } from "@chakra-ui/react"

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
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{props.title}</Heading>
          <Text py="2">{props.description}</Text>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default ProjectCard
