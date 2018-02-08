import { IModel } from '../../../common/contracts';

export interface IMember extends IModel {
    channelId: string, 
    userId?: string, 
    joinDate?: string, 
    leaveDate?: string, 
    activityTime?: string, 
    hasHistoryAccess?: boolean
}