import { ContainerModule } from "inversify";
import * as Symbol from "es6-symbol";
import {
    CompanyBatchClient,
    CompanyBatchRoute,
    CompanyClient,
    CompanyRoute,
    OrganizationBatchClient,
    OrganizationBatchRoute,
    OrganizationClient,
    OrganizationRoute,
    SkillBatchClient,
    SkillBatchRoute,
    SkillClient,
    SkillRoute,
    UserEducationClient,
    UserEducationRoute,
    UserProfileACLClient,
    UserProfileACLRoute,
    UserProfileAvatarClient,
    UserProfileAvatarRoute,
    UserProfileAvatarStreamsClient,
    UserProfileAvatarStreamsRoute,
    UserProfileClient,
    UserProfileRoute,
    UserSkillClient,
    UserSkillRoute,
    UserWorkClient,
    UserWorkRoute,
    LanguageBatchRoute,
    LanguageBatchClient,
    LanguageRoute,
    LanguageClient,
    Root
} from './';

const TYPES = {
    CompanyBatchClient: Symbol("CompanyBatchClient"),
    CompanyBatchRoute: Symbol("CompanyBatchRoute"),
    CompanyClient: Symbol("CompanyClient"),
    CompanyRoute: Symbol("CompanyRoute"),
    OrganizationBatchClient: Symbol("OrganizationBatchClient"),
    OrganizationBatchRoute: Symbol("OrganizationBatchRoute"),
    OrganizationClient: Symbol("OrganizationClient"),
    OrganizationRoute: Symbol("OrganizationRoute"),
    SkillBatchClient: Symbol("SkillBatchClient"),
    SkillBatchRoute: Symbol("SkillBatchRoute"),
    SkillClient: Symbol("SkillClient"),
    SkillRoute: Symbol("SkillRoute"),
    UserEducationClient: Symbol("UserEducationClient"),
    UserEducationRoute: Symbol("UserEducationRoute"),
    UserProfileACLClient: Symbol("UserProfileACLClient"),
    UserProfileACLRoute: Symbol("UserProfileACLRoute"),
    UserProfileAvatarClient: Symbol("UserProfileAvatarClient"),
    UserProfileAvatarRoute: Symbol("UserProfileAvatarRoute"),
    UserProfileAvatarStreamsClient: Symbol("UserProfileAvatarStreamsClient"),
    UserProfileAvatarStreamsRoute: Symbol("UserProfileAvatarStreamsClient"),
    UserProfileClient: Symbol("UserProfileClient"),
    UserProfileRoute: Symbol("UserProfileRoute"),
    UserSkillClient: Symbol("UserSkillClient"),
    UserSkillRoute: Symbol("UserSkillRoute"),
    UserWorkClient: Symbol("UserWorkClient"),
    UserWorkRoute: Symbol("UserWorkRoute"),
    LanguageBatchRoute: Symbol("LanguageBatchRoute"),
    LanguageBatchClient: Symbol("LanguageBatchClient"),
    LanguageRoute: Symbol("LanguageRoute"),
    LanguageClient: Symbol("LanguageClient"),
    Root: Symbol("UserProfile-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<CompanyBatchRoute>(TYPES.CompanyBatchRoute).to(CompanyBatchRoute);
    bind<CompanyBatchClient>(TYPES.CompanyBatchClient).to(CompanyBatchClient);
    bind<CompanyRoute>(TYPES.CompanyRoute).to(CompanyRoute);
    bind<CompanyClient>(TYPES.CompanyClient).to(CompanyClient);
    bind<OrganizationBatchRoute>(TYPES.OrganizationBatchRoute).to(OrganizationBatchRoute);
    bind<OrganizationBatchClient>(TYPES.OrganizationBatchClient).to(OrganizationBatchClient);
    bind<OrganizationRoute>(TYPES.OrganizationRoute).to(OrganizationRoute);
    bind<OrganizationClient>(TYPES.OrganizationClient).to(OrganizationClient);
    bind<SkillBatchRoute>(TYPES.SkillBatchRoute).to(SkillBatchRoute);
    bind<SkillBatchClient>(TYPES.SkillBatchClient).to(SkillBatchClient);
    bind<SkillRoute>(TYPES.SkillRoute).to(SkillRoute);
    bind<SkillClient>(TYPES.SkillClient).to(SkillClient);
    bind<UserEducationRoute>(TYPES.UserEducationRoute).to(UserEducationRoute);
    bind<UserEducationClient>(TYPES.UserEducationClient).to(UserEducationClient);
    bind<UserProfileACLRoute>(TYPES.UserProfileACLRoute).to(UserProfileACLRoute);
    bind<UserProfileACLClient>(TYPES.UserProfileACLClient).to(UserProfileACLClient);
    bind<UserProfileAvatarStreamsRoute>(TYPES.UserProfileAvatarStreamsRoute).to(UserProfileAvatarStreamsRoute);
    bind<UserProfileAvatarStreamsClient>(TYPES.UserProfileAvatarStreamsClient).to(UserProfileAvatarStreamsClient);
    bind<UserProfileAvatarRoute>(TYPES.UserProfileAvatarRoute).to(UserProfileAvatarRoute);
    bind<UserProfileAvatarClient>(TYPES.UserProfileAvatarClient).to(UserProfileAvatarClient);
    bind<UserProfileRoute>(TYPES.UserProfileRoute).to(UserProfileRoute);
    bind<UserProfileClient>(TYPES.UserProfileClient).to(UserProfileClient);
    bind<UserSkillRoute>(TYPES.UserSkillRoute).to(UserSkillRoute);
    bind<UserSkillClient>(TYPES.UserSkillClient).to(UserSkillClient);
    bind<UserWorkRoute>(TYPES.UserWorkRoute).to(UserWorkRoute);
    bind<UserWorkClient>(TYPES.UserWorkClient).to(UserWorkClient);
    bind<LanguageBatchRoute>(TYPES.LanguageBatchRoute).to(LanguageBatchRoute);
    bind<LanguageBatchClient>(TYPES.LanguageBatchClient).to(LanguageBatchClient);
    bind<LanguageRoute>(TYPES.LanguageRoute).to(LanguageRoute);
    bind<LanguageClient>(TYPES.LanguageClient).to(LanguageClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };