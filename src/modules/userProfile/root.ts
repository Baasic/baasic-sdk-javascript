import {
    BaasicUserProfileACLClient, BaasicUserProfileRouteDefinition,
    BaasicUserProfileClient,
    BaasicCompanyClient,
    BaasicOrganizationClient,
    BaasicSkillClient,
    TYPES
} from 'modules/userProfile';

import { injectable, inject } from "inversify";
import 'reflect-metadata';

@injectable()
export class Root {

    constructor(
        @inject(TYPES.BaasicUserProfileClient) public profile: BaasicUserProfileClient,
        @inject(TYPES.BaasicCompanyClient) public company: BaasicCompanyClient,
        @inject(TYPES.BaasicOrganizationClient) public organization: BaasicOrganizationClient,
        @inject(TYPES.BaasicSkillClient) public skill: BaasicSkillClient
    ) {
    }

}