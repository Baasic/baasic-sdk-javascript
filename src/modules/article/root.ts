import {
    ArticleClient,
    ArticleCommentsClient,
    ArticleFilesClient,
    ArticleRatingsClient,
    ArticleSubscriptionsClient,
    ArticleTagsClient,
    ArticleSettingsClient,
    TYPES
} from 'modules/article';


import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class Root {

    constructor(
        @inject(TYPES.ArticleClient) public articles: ArticleClient,
        @inject(TYPES.ArticleCommentsClient) public comments: ArticleCommentsClient,
        @inject(TYPES.ArticleFilesClient) public files: ArticleFilesClient,
        @inject(TYPES.ArticleRatingsClient) public ratings: ArticleRatingsClient,
        @inject(TYPES.ArticleSubscriptionsClient) public subscriptions: ArticleSubscriptionsClient,
        @inject(TYPES.ArticleTagsClient) public tags: ArticleTagsClient,
        @inject(TYPES.ArticleSettingsClient) public settings: ArticleSettingsClient

    ) {
    }

}