import {
    BaasicArticleClient,
    BaasicArticleCommentsClient,
    BaasicArticleFilesClient,
    BaasicArticleRatingsClient,
    BaasicArticleSubscriptionsClient,
    BaasicArticleTagsClient,
    BaasicArticleSettingsClient,
    TYPES
} from 'modules/article';


import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class Root {

    constructor(
        @inject(TYPES.BaasicArticleClient) public articles: BaasicArticleClient,
        @inject(TYPES.BaasicArticleCommentsClient) public comments: BaasicArticleCommentsClient,
        @inject(TYPES.BaasicArticleFilesClient) public files: BaasicArticleFilesClient,
        @inject(TYPES.BaasicArticleRatingsClient) public ratings: BaasicArticleRatingsClient,
        @inject(TYPES.BaasicArticleSubscriptionsClient) public subscriptions: BaasicArticleSubscriptionsClient,
        @inject(TYPES.BaasicArticleTagsClient) public tags: BaasicArticleTagsClient,
        @inject(TYPES.BaasicArticleSettingsClient) public settings: BaasicArticleSettingsClient

    ) {
    }

}