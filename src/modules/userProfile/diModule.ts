import { ContainerModule } from "inversify";
import {
    CompanyBatchClient,
    BaasicCompanyBatchRouteDefinition,
    CompanyClient,
    BaasicCompanyRouteDefinition,
    OrganizationBatchClient,
    BaasicOrganizationBatchRouteDefinition,
    OrganizationClient,
    BaasicOrganizationRouteDefinition,
    SkillBatchClient,
    BaasicSkillBatchRouteDefinition,
    SkillClient,
    BaasicSkillRouteDefinition,
    UserEducationClient,
    BaasicUserEducationRouteDefinition,
    UserProfileACLClient,
    BaasicUserProfileACLRouteDefinition,
    UserProfileAvatarClient,
    BaasicUserProfileAvatarRouteDefinition,
    UserProfileAvatarStreamsClient,
    BaasicUserProfileAvatarStreamsRouteDefinition,
    UserProfileClient,
    BaasicUserProfileRouteDefinition,
    UserSkillClient,
    BaasicUserSkillRouteDefinition,
    UserWorkClient,
    BaasicUserWorkRouteDefinition,
    Root
} from 'modules/userProfile';

const TYPES = {
    CompanyBatchClient: Symbol("CompanyBatchClient"),
    BaasicCompanyBatchRouteDefinition: Symbol("BaasicCompanyBatchRouteDefinition"),
    CompanyClient: Symbol("CompanyClient"),
    BaasicCompanyRouteDefinition: Symbol("BaasicCompanyRouteDefinition"),
    OrganizationBatchClient: Symbol("OrganizationBatchClient"),
    BaasicOrganizationBatchRouteDefinition: Symbol("BaasicOrganizationBatchRouteDefinition"),
    OrganizationClient: Symbol("OrganizationClient"),
    BaasicOrganizationRouteDefinition: Symbol("BaasicOrganizationRouteDefinition"),
    SkillBatchClient: Symbol("SkillBatchClient"),
    BaasicSkillBatchRouteDefinition: Symbol("BaasicSkillBatchRouteDefinition"),
    SkillClient: Symbol("SkillClient"),
    BaasicSkillRouteDefinition: Symbol("BaasicSkillRouteDefinition"),
    UserEducationClient: Symbol("UserEducationClient"),
    BaasicUserEducationRouteDefinition: Symbol("BaasicUserEducationRouteDefinition"),
    UserProfileACLClient: Symbol("UserProfileACLClient"),
    BaasicUserProfileACLRouteDefinition: Symbol("BaasicUserProfileACLRouteDefinition"),
    UserProfileAvatarClient: Symbol("UserProfileAvatarClient"),
    BaasicUserProfileAvatarRouteDefinition: Symbol("BaasicUserProfileAvatarRouteDefinition"),
    UserProfileAvatarStreamsClient: Symbol("UserProfileAvatarStreamsClient"),
    UserProfileAvatarStreamsRouteDefinition: Symbol("UserProfileAvatarStreamsClient"),
    UserProfileClient: Symbol("UserProfileClient"),
    BaasicUserProfileRouteDefinition: Symbol("BaasicUserProfileRouteDefinition"),
    UserSkillClient: Symbol("UserSkillClient"),
    BaasicUserSkillRouteDefinition: Symbol("BaasicUserSkillRouteDefinition"),
    UserWorkClient: Symbol("UserWorkClient"),
    BaasicUserWorkRouteDefinition: Symbol("BaasicUserWorkRouteDefinition"),
    Root: Symbol("UserProfile-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicCompanyBatchRouteDefinition>(TYPES.BaasicCompanyBatchRouteDefinition).to(BaasicCompanyBatchRouteDefinition);
    bind<CompanyBatchClient>(TYPES.CompanyBatchClient).to(CompanyBatchClient);
    bind<BaasicCompanyRouteDefinition>(TYPES.BaasicCompanyRouteDefinition).to(BaasicCompanyRouteDefinition);
    bind<CompanyClient>(TYPES.CompanyClient).to(CompanyClient);
    bind<BaasicOrganizationBatchRouteDefinition>(TYPES.BaasicOrganizationBatchRouteDefinition).to(BaasicOrganizationBatchRouteDefinition);
    bind<OrganizationBatchClient>(TYPES.OrganizationBatchClient).to(OrganizationBatchClient);
    bind<BaasicOrganizationRouteDefinition>(TYPES.BaasicOrganizationRouteDefinition).to(BaasicOrganizationRouteDefinition);
    bind<OrganizationClient>(TYPES.OrganizationClient).to(OrganizationClient);
    bind<BaasicSkillBatchRouteDefinition>(TYPES.BaasicSkillBatchRouteDefinition).to(BaasicSkillBatchRouteDefinition);
    bind<SkillBatchClient>(TYPES.SkillBatchClient).to(SkillBatchClient);
    bind<BaasicSkillRouteDefinition>(TYPES.BaasicSkillRouteDefinition).to(BaasicSkillRouteDefinition);
    bind<SkillClient>(TYPES.SkillClient).to(SkillClient);
    bind<BaasicUserEducationRouteDefinition>(TYPES.BaasicUserEducationRouteDefinition).to(BaasicUserEducationRouteDefinition);
    bind<UserEducationClient>(TYPES.UserEducationClient).to(UserEducationClient);
    bind<BaasicUserProfileACLRouteDefinition>(TYPES.BaasicUserProfileACLRouteDefinition).to(BaasicUserProfileACLRouteDefinition);
    bind<UserProfileACLClient>(TYPES.UserProfileACLClient).to(UserProfileACLClient);
    bind<BaasicUserProfileAvatarStreamsRouteDefinition>(TYPES.BaasicUserProfileAvatarStreamsRouteDefinition).to(BaasicUserProfileAvatarStreamsRouteDefinition);
    bind<UserProfileAvatarStreamsClient>(TYPES.UserProfileAvatarStreamsClient).to(UserProfileAvatarStreamsClient);
    bind<BaasicUserProfileAvatarRouteDefinition>(TYPES.BaasicUserProfileAvatarRouteDefinition).to(BaasicUserProfileAvatarRouteDefinition);
    bind<UserProfileAvatarClient>(TYPES.UserProfileAvatarClient).to(UserProfileAvatarClient);
    bind<BaasicUserProfileRouteDefinition>(TYPES.BaasicUserProfileRouteDefinition).to(BaasicUserProfileRouteDefinition);
    bind<UserProfileClient>(TYPES.UserProfileClient).to(UserProfileClient);
    bind<BaasicUserSkillRouteDefinition>(TYPES.BaasicUserSkillRouteDefinition).to(BaasicUserSkillRouteDefinition);
    bind<UserSkillClient>(TYPES.UserSkillClient).to(UserSkillClient);
    bind<BaasicUserWorkRouteDefinition>(TYPES.BaasicUserWorkRouteDefinition).to(BaasicUserWorkRouteDefinition);
    bind<UserWorkClient>(TYPES.UserWorkClient).to(UserWorkClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };