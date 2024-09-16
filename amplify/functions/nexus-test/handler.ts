import type { Handler } from 'aws-lambda';
import { Schema } from '../../data/resource';

export const handler: Schema['nexusTest']['functionHandler'] = async (event, context) => {

    const id  = event.arguments.id; 
    // your function code goes here
    return {data : id + 'Lambdaからの返り値'};
};