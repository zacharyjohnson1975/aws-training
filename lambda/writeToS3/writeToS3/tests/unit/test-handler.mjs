'use strict';

import { lambda_Handler } from '../../lambda_handler.mjs';
import { expect } from 'chai';
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await lambda_Handler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("hello world");
    });
});
