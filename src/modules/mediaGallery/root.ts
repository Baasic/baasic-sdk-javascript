import {
    MediaGalleryClient,
    MediaGalleryFileClient,
    MediaGallerySettingsClient,
    TYPES
} from './';


import { injectable, inject } from "inversify";

@injectable()
export class Root {
    constructor(
        @inject(TYPES.MediaGalleryClient) public galleries: MediaGalleryClient,
        @inject(TYPES.MediaGalleryFileClient) public files: MediaGalleryFileClient,
        @inject(TYPES.MediaGallerySettingsClient) public settings: MediaGallerySettingsClient
    ) {
    }
}