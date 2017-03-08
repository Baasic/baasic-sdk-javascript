import { ContainerModule } from "inversify";
import {
    BaasicCompanyBatchClient,
    BaasicCompanyBatchRouteDefinition,
    BaasicCompanyClient,
    BaasicCompanyRouteDefinition,
    BaasicOrganizationBatchClient,
    BaasicOrganizationBatchRouteDefinition,
    BaasicOrganizationClient,
    BaasicOrganizationRouteDefinition,
    BaasicSkillBatchClient,
    BaasicSkillBatchRouteDefinition,
    BaasicSkillClient,
    BaasicSkillRouteDefinition,
    BaasicUserEducationClient,
    BaasicUserEducationRouteDefinition,
    BaasicUserProfileACLClient,
    BaasicUserProfileACLRouteDefinition,
    BaasicUserProfileAvatarClient,
    BaasicUserProfileAvatarRouteDefinition,
    BaasicUserProfileAvatarStreamsClient,
    BaasicUserProfileAvatarStreamsRouteDefinition,
    BaasicUserProfileClient,
    BaasicUserProfileRouteDefinition,
    BaasicUserSkillClient,
    BaasicUserSkillRouteDefinition,
    BaasicUserWorkClient,
    BaasicUserWorkRouteDefinition,
    Root
} from 'modules/userProfile';

const TYPES = {
    BaasicCompanyBatchClient: Symbol("BaasicCompanyBatchClient"),
    BaasicCompanyBatchRouteDefinition: Symbol("BaasicCompanyBatchRouteDefinition"),
    BaasicCompanyClient: Symbol("BaasicCompanyClient"),
    BaasicCompanyRouteDefinition: Symbol("BaasicCompanyRouteDefinition"),
    BaasicOrganizationBatchClient: Symbol("BaasicOrganizationBatchClient"),
    BaasicOrganizationBatchRouteDefinition: Symbol("BaasicOrganizationBatchRouteDefinition"),
    BaasicOrganizationClient: Symbol("BaasicOrganizationClient"),
    BaasicOrganizationRouteDefinition: Symbol("BaasicOrganizationRouteDefinition"),
    BaasicSkillBatchClient: Symbol("BaasicSkillBatchClient"),
    BaasicSkillBatchRouteDefinition: Symbol("BaasicSkillBatchRouteDefinition"),
    BaasicSkillClient: Symbol("BaasicSkillClient"),
    BaasicSkillRouteDefinition: Symbol("BaasicSkillRouteDefinition"),
    BaasicUserEducationClient: Symbol("BaasicUserEducationClient"),
    BaasicUserEducationRouteDefinition: Symbol("BaasicUserEducationRouteDefinition"),
    BaasicUserProfileACLClient: Symbol("BaasicUserProfileACLClient"),
    BaasicUserProfileACLRouteDefinition: Symbol("BaasicUserProfileACLRouteDefinition"),
    BaasicUserProfileAvatarClient: Symbol("BaasicUserProfileAvatarClient"),
    BaasicUserProfileAvatarRouteDefinition: Symbol("BaasicUserProfileAvatarRouteDefinition"),
    BaasicUserProfileAvatarStreamsClient: Symbol("BaasicUserProfileAvatarStreamsClient"),
    BaasicUserProfileAvatarStreamsRouteDefinition: Symbol("BaasicUserProfileAvatarStreamsClient"),
    BaasicUserProfileClient: Symbol("BaasicUserProfileClient"),
    BaasicUserProfileRouteDefinition: Symbol("BaasicUserProfileRouteDefinition"),
    BaasicUserSkillClient: Symbol("BaasicUserSkillClient"),
    BaasicUserSkillRouteDefinition: Symbol("BaasicUserSkillRouteDefinition"),
    BaasicUserWorkClient: Symbol("BaasicUserWorkClient"),
    BaasicUserWorkRouteDefinition: Symbol("BaasicUserWorkRouteDefinition"),
    Root: Symbol("UserProfile-Root")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicCompanyBatchRouteDefinition>(TYPES.BaasicCompanyBatchRouteDefinition).to(BaasicCompanyBatchRouteDefinition);
    bind<BaasicCompanyBatchClient>(TYPES.BaasicCompanyBatchClient).to(BaasicCompanyBatchClient);
    bind<BaasicCompanyRouteDefinition>(TYPES.BaasicCompanyRouteDefinition).to(BaasicCompanyRouteDefinition);
    bind<BaasicCompanyClient>(TYPES.BaasicCompanyClient).to(BaasicCompanyClient);
    bind<BaasicOrganizationBatchRouteDefinition>(TYPES.BaasicOrganizationBatchRouteDefinition).to(BaasicOrganizationBatchRouteDefinition);
    bind<BaasicOrganizationBatchClient>(TYPES.BaasicOrganizationBatchClient).to(BaasicOrganizationBatchClient);
    bind<BaasicOrganizationRouteDefinition>(TYPES.BaasicOrganizationRouteDefinition).to(BaasicOrganizationRouteDefinition);
    bind<BaasicOrganizationClient>(TYPES.BaasicOrganizationClient).to(BaasicOrganizationClient);
    bind<BaasicSkillBatchRouteDefinition>(TYPES.BaasicSkillBatchRouteDefinition).to(BaasicSkillBatchRouteDefinition);
    bind<BaasicSkillBatchClient>(TYPES.BaasicSkillBatchClient).to(BaasicSkillBatchClient);
    bind<BaasicSkillRouteDefinition>(TYPES.BaasicSkillRouteDefinition).to(BaasicSkillRouteDefinition);
    bind<BaasicSkillClient>(TYPES.BaasicSkillClient).to(BaasicSkillClient);
    bind<BaasicUserEducationRouteDefinition>(TYPES.BaasicUserEducationRouteDefinition).to(BaasicUserEducationRouteDefinition);
    bind<BaasicUserEducationClient>(TYPES.BaasicUserEducationClient).to(BaasicUserEducationClient);
    bind<BaasicUserProfileACLRouteDefinition>(TYPES.BaasicUserProfileACLRouteDefinition).to(BaasicUserProfileACLRouteDefinition);
    bind<BaasicUserProfileACLClient>(TYPES.BaasicUserProfileACLClient).to(BaasicUserProfileACLClient);
    bind<BaasicUserProfileAvatarStreamsRouteDefinition>(TYPES.BaasicUserProfileAvatarStreamsRouteDefinition).to(BaasicUserProfileAvatarStreamsRouteDefinition);
    bind<BaasicUserProfileAvatarStreamsClient>(TYPES.BaasicUserProfileAvatarStreamsClient).to(BaasicUserProfileAvatarStreamsClient);
    bind<BaasicUserProfileAvatarRouteDefinition>(TYPES.BaasicUserProfileAvatarRouteDefinition).to(BaasicUserProfileAvatarRouteDefinition);
    bind<BaasicUserProfileAvatarClient>(TYPES.BaasicUserProfileAvatarClient).to(BaasicUserProfileAvatarClient);
    bind<BaasicUserProfileRouteDefinition>(TYPES.BaasicUserProfileRouteDefinition).to(BaasicUserProfileRouteDefinition);
    bind<BaasicUserProfileClient>(TYPES.BaasicUserProfileClient).to(BaasicUserProfileClient);
    bind<BaasicUserSkillRouteDefinition>(TYPES.BaasicUserSkillRouteDefinition).to(BaasicUserSkillRouteDefinition);
    bind<BaasicUserSkillClient>(TYPES.BaasicUserSkillClient).to(BaasicUserSkillClient);
    bind<BaasicUserWorkRouteDefinition>(TYPES.BaasicUserWorkRouteDefinition).to(BaasicUserWorkRouteDefinition);
    bind<BaasicUserWorkClient>(TYPES.BaasicUserWorkClient).to(BaasicUserWorkClient);
    bind<Root>(TYPES.Root).to(Root);
});

export { diModule };