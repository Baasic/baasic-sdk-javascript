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
    BaasicUserWorkRouteDefinition
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
    BaasicUserWorkRouteDefinition: Symbol("BaasicUserWorkRouteDefinition")
};

export { TYPES };

let diModule: ContainerModule = new ContainerModule((bind) => {
    bind<BaasicCompanyBatchRouteDefinition>(TYPES.BaasicCompanyBatchRouteDefinition).toSelf();
    bind<BaasicCompanyBatchClient>(TYPES.BaasicCompanyBatchClient).toSelf();
    bind<BaasicCompanyRouteDefinition>(TYPES.BaasicCompanyRouteDefinition).toSelf();
    bind<BaasicCompanyClient>(TYPES.BaasicCompanyClient).toSelf();
    bind<BaasicOrganizationBatchRouteDefinition>(TYPES.BaasicOrganizationBatchRouteDefinition).toSelf();
    bind<BaasicOrganizationBatchClient>(TYPES.BaasicOrganizationBatchClient).toSelf();
    bind<BaasicOrganizationRouteDefinition>(TYPES.BaasicOrganizationRouteDefinition).toSelf();
    bind<BaasicOrganizationClient>(TYPES.BaasicOrganizationClient).toSelf();
    bind<BaasicSkillBatchRouteDefinition>(TYPES.BaasicSkillBatchRouteDefinition).toSelf();
    bind<BaasicSkillBatchClient>(TYPES.BaasicSkillBatchClient).toSelf();
    bind<BaasicSkillRouteDefinition>(TYPES.BaasicSkillRouteDefinition).toSelf();
    bind<BaasicSkillClient>(TYPES.BaasicSkillClient).toSelf();
    bind<BaasicUserEducationRouteDefinition>(TYPES.BaasicUserEducationRouteDefinition).toSelf();
    bind<BaasicUserEducationClient>(TYPES.BaasicUserEducationClient).toSelf();
    bind<BaasicUserProfileACLRouteDefinition>(TYPES.BaasicUserProfileACLRouteDefinition).toSelf();
    bind<BaasicUserProfileAvatarStreamsRouteDefinition>(TYPES.BaasicUserProfileAvatarStreamsRouteDefinition).toSelf();
    bind<BaasicUserProfileAvatarStreamsClient>(TYPES.BaasicUserProfileAvatarStreamsClient).toSelf();
    bind<BaasicUserProfileAvatarRouteDefinition>(TYPES.BaasicUserProfileAvatarRouteDefinition).toSelf();
    bind<BaasicUserProfileRouteDefinition>(TYPES.BaasicUserProfileRouteDefinition).toSelf();
    bind<BaasicUserProfileClient>(TYPES.BaasicUserProfileClient).toSelf();
    bind<BaasicUserSkillRouteDefinition>(TYPES.BaasicUserSkillRouteDefinition).toSelf();
    bind<BaasicUserSkillClient>(TYPES.BaasicUserSkillClient).toSelf();
    bind<BaasicUserWorkRouteDefinition>(TYPES.BaasicUserWorkRouteDefinition).toSelf();
    bind<BaasicUserWorkClient>(TYPES.BaasicUserWorkClient).toSelf();
});