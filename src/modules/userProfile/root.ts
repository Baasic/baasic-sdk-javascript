import {
    UserProfileACLClient, UserProfileRoute,
    UserProfileClient,
    CompanyClient,
    OrganizationClient,
    SkillClient,
    TYPES
} from './';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.UserProfileClient) public profile: UserProfileClient,
        @inject(TYPES.CompanyClient) public company: CompanyClient,
        @inject(TYPES.OrganizationClient) public organization: OrganizationClient,
        @inject(TYPES.SkillClient) public skill: SkillClient
    ) {
    }

}