/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
import AWS from '@aws-sdk/client-s3';
const S3 = new AWS.S3();

export const writeToS3Handler = async (event, context) => {
  try
  {
    const fileToUpload = {
      userId:"123456",
      email:"enrico@gmail.com",
      city:"London",
      country:"UK"
    }

    const params = {
      Bucket: 'writetos3',
      Key: `test.json`,
      Body: JSON.stringify(fileToUpload),
      ContentType: 'application/json; charset=utf-8'
    }
    await S3.putObject(params);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'hello world',
      })
    };

  return response;
  }
  catch (error)
  {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: error,
      })
    };

    return response;
  }
};
  