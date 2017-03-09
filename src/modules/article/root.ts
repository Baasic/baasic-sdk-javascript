import {
    BaasicArticleClient,
    BaasicArticleInstanceCommentsClient,
    BaasicArticleInstanceFilesClient,
    BaasicArticleInstanceRatingsClient,
    BaasicArticleSubscriptionsClient,
    BaasicArticleInstanceTagsClient,
    TYPES
} from 'modules/article';


import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class Root {

    constructor(
        @inject(TYPES.BaasicArticleClient) public articles: BaasicArticleClient,
        @inject(TYPES.BaasicArticleInstanceCommentsClient) public comments: BaasicArticleInstanceCommentsClient,
        @inject(TYPES.BaasicArticleInstanceFilesClient) public files: BaasicArticleInstanceFilesClient,
        @inject(TYPES.BaasicArticleInstanceRatingsClient) public ratings: BaasicArticleInstanceRatingsClient,
        @inject(TYPES.BaasicArticleSubscriptionsClient) public subscriptions: BaasicArticleSubscriptionsClient,
        @inject(TYPES.BaasicArticleInstanceTagsClient) public tags: BaasicArticleInstanceTagsClient
    ) {
    }

}