import {
    UserProfileACLClient, BaasicUserProfileRouteDefinition,
    UserProfileClient,
    CompanyClient,
    OrganizationClient,
    SkillClient,
    TYPES
} from 'modules/userProfile';

import { injectable, inject } from "inversify";
import 'reflect-metadata';

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