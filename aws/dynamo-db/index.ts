import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb"

const awsCredentials = {
  accessKeyId: process.env.AWS_DYNAMO_DB_ACCESS_KEY as string,
  secretAccessKey: process.env.AWS_DYNAMO_DB_SECRET_ACCESS_KEY as string,
  region: process.env.AWS_DYNAMO_REGION as string,
}

const dbClient = new DynamoDBClient({
  credentials: {
    accessKeyId: awsCredentials.accessKeyId,
    secretAccessKey: awsCredentials.secretAccessKey,
  },
  region: awsCredentials.region,
})

const docClient = DynamoDBDocumentClient.from(dbClient)

const tableName = "my-table"

export const getDataTest = async () => {
  try {
    const data = await dbClient.send(
      new ScanCommand({
        TableName: tableName,
      })
    )
    return data.Items
  } catch (err) {
    console.error("Error", err)
    throw err
  }
}
