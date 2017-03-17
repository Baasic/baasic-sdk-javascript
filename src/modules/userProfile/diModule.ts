import { ContainerModule } from "inversify";
import {
    CompanyBatchClient,
    CompanyBatchRouteDefinition,
    CompanyClient,
    CompanyRouteDefinition,
    OrganizationBatchClient,
    OrganizationBatchRouteDefinition,
    OrganizationClient,
    OrganizationRouteDefinition,
    SkillBatchClient,
    SkillBatchRouteDefinition,
    SkillClient,
    SkillRouteDefinition,
    UserEducationClient,
    UserEducationRouteDefinition,
    UserProfileACLClient,
    UserProfileACLRouteDefinition,
    UserProfileAvatarClient,
    UserProfileAvatarRouteDefinition,
    UserProfileAvatarStreamsClient,
    UserProfileAvatarStreamsRouteDefinition,
    UserProfileClient,
    UserProfileRouteDefinition,
    UserSkillClient,
    UserSkillRouteDefinition,
    UserWorkClient,
    UserWorkRouteDefinition,
    Root
} from 'modules/userProfile';

const TYPES = {
    CompanyBatchClient: Symbol("CompanyBatchClient"),
    CompanyBatchRouteDefinition: Symbol("CompanyBatchRouteDefinition"),
    CompanyClient: Symbol("CompanyClient"),
    CompanyRouteDefinition: Symbol("CompanyRouteDefinition"),
    OrganizationBatchClient: Symbol("OrganizationBatchClient"),
    OrganizationBatchRouteDefinition: Symbol("OrganizationBatchRouteDefinition"),
    OrganizationClient: Symbol("OrganizationClient"),
    OrganizationRouteDefinition: Symbol("OrganizationRouteDefinition"),
    SkillBatchClient: Symbol("SkillBatchClient"),
    SkillBatchRouteDefinition: Symbol("SkillBatchRouteDefinition"),
    SkillClient: Symbol("SkillClient"),
    SkillRouteDefinition: Symbol("SkillRouteDefinition"),
    UserEducationClient: Symbol("UserEducationClient"),
    UserEducationRouteDefinition: Symbol("UserEducationRouteDefinition"),
    UserProfileACLClient: Symbol("UserProfileACLClient"),
    UserProfileACLRouteDefinition: Symbol("UserProfileACLRouteDefinition"),
    UserProfileAvatarClient: Symbol("UserProfileAvatarClient"),
    UserProfileAvatarRouteDefinition: Symbol("UserProfileAvatarRouteDefinition"),
    UserProfileAvatarStreamsClient: Symbol("UserProfileAvatarStreamsClient"),
    UserProfileAvatarStreamsRouteDefinition: Symbol("UserProfileAvatarStreamsClient"),
    UserProfileClient: Symbol("UserProfileClient"),
    UserProfileRouteDefinition: Symbol("UserProfileRouteDefinition"),
    UserSkillClient: Symbol("UserSkillClient"),
    UserSkillRouteDefinition: Symbol("UserSkillRouteDefinition"),
    UserWorkClient: Symbol("UserWorkClient"),
    UserWorkRouteDefinition: Symbol("UserWorkRouteDefinition"),
    Root: Symbol("UserProfile-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<CompanyBatchRouteDefinition>(TYPES.CompanyBatchRouteDefinition).to(CompanyBatchRouteDefinition);
    bind<CompanyBatchClient>(TYPES.CompanyBatchClient).to(CompanyBatchClient);
    bind<CompanyRouteDefinition>(TYPES.CompanyRouteDefinition).to(CompanyRouteDefinition);
    bind<CompanyClient>(TYPES.CompanyClient).to(CompanyClient);
    bind<OrganizationBatchRouteDefinition>(TYPES.OrganizationBatchRouteDefinition).to(OrganizationBatchRouteDefinition);
    bind<OrganizationBatchClient>(TYPES.OrganizationBatchClient).to(OrganizationBatchClient);
    bind<OrganizationRouteDefinition>(TYPES.OrganizationRouteDefinition).to(OrganizationRouteDefinition);
    bind<OrganizationClient>(TYPES.OrganizationClient).to(OrganizationClient);
    bind<SkillBatchRouteDefinition>(TYPES.SkillBatchRouteDefinition).to(SkillBatchRouteDefinition);
    bind<SkillBatchClient>(TYPES.SkillBatchClient).to(SkillBatchClient);
    bind<SkillRouteDefinition>(TYPES.SkillRouteDefinition).to(SkillRouteDefinition);
    bind<SkillClient>(TYPES.SkillClient).to(SkillClient);
    bind<UserEducationRouteDefinition>(TYPES.UserEducationRouteDefinition).to(UserEducationRouteDefinition);
    bind<UserEducationClient>(TYPES.UserEducationClient).to(UserEducationClient);
    bind<UserProfileACLRouteDefinition>(TYPES.UserProfileACLRouteDefinition).to(UserProfileACLRouteDefinition);
    bind<UserProfileACLClient>(TYPES.UserProfileACLClient).to(UserProfileACLClient);
    bind<UserProfileAvatarStreamsRouteDefinition>(TYPES.UserProfileAvatarStreamsRouteDefinition).to(UserProfileAvatarStreamsRouteDefinition);
    bind<UserProfileAvatarStreamsClient>(TYPES.UserProfileAvatarStreamsClient).to(UserProfileAvatarStreamsClient);
    bind<UserProfileAvatarRouteDefinition>(TYPES.UserProfileAvatarRouteDefinition).to(UserProfileAvatarRouteDefinition);
    bind<UserProfileAvatarClient>(TYPES.UserProfileAvatarClient).to(UserProfileAvatarClient);
    bind<UserProfileRouteDefinition>(TYPES.UserProfileRouteDefinition).to(UserProfileRouteDefinition);
    bind<UserProfileClient>(TYPES.UserProfileClient).to(UserProfileClient);
    bind<UserSkillRouteDefinition>(TYPES.UserSkillRouteDefinition).to(UserSkillRouteDefinition);
    bind<UserSkillClient>(TYPES.UserSkillClient).to(UserSkillClient);
    bind<UserWorkRouteDefinition>(TYPES.UserWorkRouteDefinition).to(UserWorkRouteDefinition);
    bind<UserWorkClient>(TYPES.UserWorkClient).to(UserWorkClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };