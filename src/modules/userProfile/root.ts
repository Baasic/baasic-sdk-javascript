import {
    UserProfileClient,
    CompanyClient,
    OrganizationClient,
    SkillClient,
    LanguageClient,
    TYPES
} from './';

import { injectable, inject } from "inversify";

@injectable()
export class Root {

    constructor(
        @inject(TYPES.UserProfileClient) public profile: UserProfileClient,
        @inject(TYPES.CompanyClient) public company: CompanyClient,
        @inject(TYPES.OrganizationClient) public organization: OrganizationClient,
        @inject(TYPES.SkillClient) public skill: SkillClient,
        @inject(TYPES.LanguageClient) public language: LanguageClient
    ) {
    }

}