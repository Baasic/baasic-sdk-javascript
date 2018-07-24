import { IModel } from 'common/contracts';;

export interface IArticleSettings extends IModel {
    allowArchive: boolean,
    allowComments: boolean,
    allowRating: boolean,
    allowSubscription: boolean,
    allowTags: boolean,
    allowUploads: boolean,
    allowSaveDraft: boolean,
    autoSaveDraftPeriod: number,
    commentAllowSubscriptions: boolean,
    commentNotifyPostAuthor: boolean,
    commentNotifyPostAuthorCC?: string,
    commentNotifyRequireModeration: boolean,
    commentRequireModeration: boolean,
    defaultContentFormat: string,
    logSubscriptionNotifications: boolean,
    notifyAuthorOnNewSubscriptions: boolean,
    notifyAuthorOnNewSubscriptionsCC?: string,
    uploadAllowedExtensions: string,
    uploadLogNotifications: boolean,
    uploadNotifyRequireModeration: boolean,
    uploadNotifyRequireModerationCC?: string,
    uploadRequireModeration: boolean
}